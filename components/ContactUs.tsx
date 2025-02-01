"use client";

import { formSchema } from "@/lib/schemas";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/uis/card";
import { Input } from "@/components/uis/input";
import { Textarea } from "@/components/uis/textarea";
import { Button } from "@/components/uis/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/uis/form";
import { z } from "zod";
import { send } from "@/lib/email";

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    send(values);
    console.log(values);
  }

  return (
    <Card className="mt-8 mx-4 max-w-4xl w-full m-0 p-2 md:p-6 lg:p-8">
      <CardHeader>
        <CardTitle className="text-3xl">Contact Us</CardTitle>
        <CardDescription className="text-lg">
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl font-semibold">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl font-semibold">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Phone Number"
                        type="number"
                        className="text-xl appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none [&[type=number]]:appearance-textfield"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-2xl font-semibold">
                      Email
                    </FormLabel>
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
                  <FormItem className="md:col-span-2">
                    <FormLabel className="text-2xl font-semibold">
                      Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        id="message"
                        placeholder="Type in your message here"
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button
              type="submit"
              className="bg-orange-200 text-black text-md block ml-auto mr-auto font-semibold">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
