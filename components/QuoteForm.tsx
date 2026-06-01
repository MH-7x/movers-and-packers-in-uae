"use client";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Loader, Send } from "lucide-react";
import { SendMail } from "@/lib/sendMail";
import { useState } from "react";

export type FormDataType = {
  name: string;
  phone: string;
  movingFrom: string;
  movingTo: string;
  message?: string;
};

const QuoteForm = ({ btnText }: { btnText?: string }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: FormDataType = Object.fromEntries(
      formData.entries(),
    ) as FormDataType;

    if (!data.name || !data.phone || !data.movingFrom || !data.movingTo) {
      toast.error("Please fill in all required fields.", {
        action: {
          label: "close",
          onClick: () => {
            toast.dismiss();
          },
        },
      });
      setLoading(false);
      return;
    }
    try {
      const response = await SendMail({ data });
      if (!response.success) {
        toast.error(
          response.error || "Failed to send quote request. Please try again.",
          {
            action: {
              label: "close",
              onClick: () => {
                toast.dismiss();
              },
            },
          },
        );
        setLoading(false);
      } else {
        toast.success(
          "Quote request sent successfully! We'll get back to you within 10 minutes.",
          {
            action: {
              label: "ok",
              onClick: () => {
                toast.dismiss();
              },
            },
          },
        );
        setLoading(false);
        window.location.reload();
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "An unexpected error occurred. Please try again.",
        {
          action: {
            label: "close",
            onClick: () => {
              toast.dismiss();
            },
          },
        },
      );
    } finally {
      setLoading(false);
    }

    console.log(data);
  };
  return (
    <form
      dir="ltr"
      id="quote-form"
      onSubmit={handleSubmit}
      className="mt-10 grid md:grid-cols-2 grid-cols-1 gap-5 text-muted text-[14.5px]"
    >
      <input
        type="text"
        id="name"
        name="name"
        aria-label="your name"
        placeholder="Your Name *"
        className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
      />
      <input
        type="number"
        id="phone"
        name="phone"
        aria-label="phone number"
        placeholder="Phone No *"
        className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
      />
      <input
        type="text"
        name="movingFrom"
        id="movingFrom"
        aria-label="moving from location"
        placeholder="Moving From *"
        className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
      />
      <input
        type="text"
        name="movingTo"
        id="MovingTo"
        aria-label="moving to location"
        placeholder="Moving To *"
        className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none"
      />
      <textarea
        name="message"
        id="message"
        aria-label="extra details about the move"
        placeholder="More Details About Your Move.."
        className="py-3 px-2 border-b border-b-white focus:border-b-primary outline-none col-span-full min-h-28"
      ></textarea>
      <Button size={"lg"} className="mt-5 col-span-full">
        {loading ? (
          <>
            Sending <Loader className="animate-spin" />
          </>
        ) : (
          <>
            {btnText || "Get A Quote"} <Send strokeWidth={1} />
          </>
        )}
      </Button>
    </form>
  );
};

export default QuoteForm;
