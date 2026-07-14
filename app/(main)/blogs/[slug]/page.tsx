import LatestsNews from "@/components/LatestsNews";
import { Button } from "@/components/ui/button";
import { generateBlogSchema } from "@/lib/generateBlogSchema";
import { generateBreadcrumb } from "@/lib/generateBreadcrumb";
import { CalendarCheck2, ListTodoIcon, User2Icon } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/Breadcrumb";

export interface Main {
  message: string;
  success: boolean;
  blog: Blog;
}

export interface Blog {
  author: Author;
  seo: SEO;
  _id: string;
  title: string;
  caption: string;
  category: Category;
  FeaturedImage: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
}

let errorMessage: string;
const getData = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog?slug=/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog details");
    }

    const data: Main = await res.json();
    if (!data.success) {
      errorMessage = data.message;
    }
    return data.blog;
  } catch (error) {
    if (error instanceof Error) errorMessage = error.message;
    errorMessage = "An unknown error occurred.";
    console.log("Server Error: ", Error);
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getData(slug);
  console.log("APP URL : ", process.env.APP_URL);

  if (blog) {
    return {
      title: blog.seo?.metaTitle || blog.title,
      description: blog.seo?.metaDescription || blog.caption,
      alternates: {
        canonical: `${process.env.APP_URL}/blogs/${slug}`,
      },
      openGraph: {
        title: blog.seo?.metaTitle || blog.title,
        description: blog.seo?.metaDescription || blog.caption,
        url: `${process.env.APP_URL}/blogs/${slug}`,
        images: blog.FeaturedImage
          ? [
              {
                url: blog.FeaturedImage,
                width: 800,
                height: 600,
              },
            ]
          : undefined,
        type: "article",
        authors: ["Mashal Huraira", blog.author.name],
        countryName: "UAE",
        modifiedTime: blog.updatedAt.toString(),
        siteName: "Movers and Packers in UAE",
        locale: "en-US",
        tags: [blog.category.name],
        publishedTime: blog.createdAt.toString(),
      },
      applicationName: "Movers and Packers in UAE",
      category: blog.category.name,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          "max-snippet": -1,
          "max-video-preview": -1,
          "max-image-preview": "large",
          notranslate: true,
        },
      },
    };
  }
  return notFound();
}

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const blog = await getData(slug);

  const blogSchema = generateBlogSchema({
    headline: blog?.title ? blog.title : "",
    datePublished: blog?.createdAt
      ? new Date(blog.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
    dateModified: blog?.updatedAt
      ? new Date(blog.updatedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "",
  });

  const breadcrumb = generateBreadcrumb({
    list: [
      {
        title: "Blogs",
        url: "/blogs",
      },
      {
        title: blog?.title ? blog.title : "",
        url: `/blogs/${slug}`,
      },
    ],
  });

  const heading = blog?.title
    ? blog.title
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return blog ? (
    <article>
      <script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: blogSchema }}
      />
      <script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumb }}
      />
      <main>
        <Breadcrumb
          list={[
            {
              title: "Blogs",
              url: "/blogs",
            },
            {
              title: blog?.title ? blog.title : "",
              url: `/blogs/${slug}`,
            },
          ]}
        />
        <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
          <>
            <div className="grid-background" />
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="md:text-5xl text-3xl border-b-4 pb-5 border-primary font-bold text-center ">
                <span className=" ">{heading}</span>
              </h1>
              <div className="max-w-3xl mx-auto text-muted-foreground text mt-5">
                <p>{blog.caption}</p>
              </div>
              <div className=" mt-10 flex items-center justify-center flex-wrap">
                <Button
                  variant={"ghost"}
                  title={`Author of blog post`}
                  className="text-muted-foreground font-normal"
                  size={"sm"}
                >
                  <User2Icon /> Mashal Huraira
                </Button>
                <Button
                  variant={"ghost"}
                  title={`Category ${blog.category.name}`}
                  className="text-muted-foreground font-normal"
                  size={"sm"}
                >
                  <ListTodoIcon /> {blog.category.name}
                </Button>
                <Button
                  variant={"ghost"}
                  title={`last updated date`}
                  className="text-muted-foreground font-normal"
                  size={"sm"}
                >
                  <CalendarCheck2 /> Updated at{" "}
                  {new Date(blog.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Button>
                <Button
                  variant={"ghost"}
                  title={`published date`}
                  className="text-muted-foreground font-normal"
                  size={"sm"}
                >
                  <CalendarCheck2 /> Created at{" "}
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </Button>
              </div>
            </div>
          </>
        </section>
        {blog && (
          <>
            <div
              id="featured-image"
              className="mb-16 bg-gray-100 rounded-2xl max-w-3xl md:mx-auto mx-3 aspect-4/3 relative overflow-hidden"
            >
              <Image
                alt={blog.title}
                src={blog.FeaturedImage || "/Background-with-text.jpg"}
                fill
                loading="eager"
                priority
                className="object-cover "
              />
            </div>
            <section
              id="content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="max-w-3xl md:mx-auto mx-3 text mb-16"
            ></section>
            <LatestsNews />
          </>
        )}
      </main>
    </article>
  ) : (
    notFound()
  );
};

export default SingleBlogPage;
