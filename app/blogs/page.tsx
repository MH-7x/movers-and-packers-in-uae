import BlogCard from "@/components/BlogCard";
import MetadataTemplate from "@/lib/MetaDataTemplate";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MainForCard } from "@/types/blog";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Our Blogs | Movers and Packers in UAE",
      desc: "Read Movers and Packers in UAE's blog for tips on moving furniture, office relocations, and more. Stay informed with our expert insights and advice.",
    },
    path: "/blogs",
    image: {
      path: "/movers-and-packers-in-uae-blogs.jpg",
      alt: "Movers and Packers in UAE Blogs - Tips on Moving Furniture, Office Relocations, and More",
    },
  },
});

let errorMessage: string;

async function getBlogs(page = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog?page=${page}&limit=6`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const data: MainForCard = await res.json();
    if (!data.success) {
      errorMessage = data.message;
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    errorMessage = "An unknown error occurred.";
  }
}

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const page = Number((await searchParams).page) || 1;

  const blogsData = await getBlogs(page);
  const pagination = blogsData?.pagination;

  return (
    <main>
      <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-4">
        <div className="grid-background" />
        <h1 className="md:text-5xl text-3xl  font-bold text-center">
          <span className=" border-b-4 border-primary">Our Blogs</span>
          <br className="md:block" /> Movers and Packers in UAE
        </h1>
        <div className="max-w-3xl mx-auto text-center text-muted-foreground mt-5">
          <p>
            Read Movers and Packers in UAE&apos;s blog for tips on moving
            furniture, office relocations, and more. Stay informed with our
            expert insights and advice.
          </p>
        </div>
      </section>

      <div className="mt-10 max-w-7xl mx-auto px-4 md:px-10 mb-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {blogsData ? (
            blogsData.data &&
            blogsData.data.map((blog) => (
              <BlogCard
                key={blog._id}
                image={blog.FeaturedImage || "/Background-with-text.jpg"}
                category={blog.category.name}
                title={blog.title}
                date={new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                author={"Mashal Huraira"}
                excerpt={blog.caption}
                href={`/blogs${blog.slug}`}
              />
            ))
          ) : (
            <div className="col-span-3">
              <p className="text-red-500 text-center max-w-md mx-auto p-5 rounded-2xl border border-red-500 bg-red-50">
                Error: {errorMessage}
              </p>
            </div>
          )}
        </div>
      </div>

      {pagination && pagination.totalPages > 1 && (
        <Pagination className="mb-16">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${Math.max(1, pagination.page - 1)}`}
                aria-disabled={pagination.page === 1}
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
              (p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    href={`?page=${p}`}
                    isActive={p === pagination.page}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              ),
            )}

            {/* Ellipsis (if needed) */}
            {pagination.totalPages > 6 && <PaginationEllipsis />}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                href={`?page=${Math.min(
                  pagination.totalPages,
                  pagination.page + 1,
                )}`}
                aria-disabled={pagination.page === pagination.totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </main>
  );
};

export default BlogsPage;
