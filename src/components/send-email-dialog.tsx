import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "./ui/button";
import { DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const SendEmailDialog = ({ children }: PropsWithChildren) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="w-4/5 md:w-full">
        <DialogHeader>
          <DialogTitle>Send me an email</DialogTitle>
        </DialogHeader>
        <EmailForm setIsDialogOpen={setIsDialogOpen} />
      </DialogContent>
    </Dialog>
  );
};

export default SendEmailDialog;

const formSchema = z.object({
  email: z.string().email(),
  message: z
    .string()
    .min(30, { message: "Message must contain at least 30 character(s)" }),
});

interface EmailFormProps {
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}

const EmailForm = ({ setIsDialogOpen }: EmailFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsDialogOpen(false);

    toast.loading("Sending", {
      id: "email",
    });
    const response = await fetch("/email", {
      method: "POST",
      body: JSON.stringify({ ...values }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data: { error: boolean } = await response.json();

    if (data.error) {
      return toast.error("Something went wrong", {
        id: "email",
      });
    }
    return toast.success("Email sent successfully", {
      description: "I will be in touch shortly",
      id: "email",
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea placeholder="Your Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
};
