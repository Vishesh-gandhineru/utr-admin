"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { string, z } from "zod";
import { useState , useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
// import { CheckListOptions } from "@/lib/ChecklistOptions";
import { Separator } from "../ui/separator";
import { SendEmail } from "@/actions/SendEmail";
import { useSearchParams } from 'next/navigation'

const formSchema = z.object({
  propertyName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  bookingId: z.string().min(2, {
    message: "Booking Id must be at least 2 characters.",
  }),
  dateOfCheck: z.string(),
  checkConductedBy: z.string().min(2, {
    message: "Check Conducted By must be at least 2 characters.",
  }),
  propertyManagerName: z.string().min(2, {
    message: "Property Manager Name must be at least 2 characters.",
  }),
  onSiteCareTakerName: z.string().min(2, {
    message: "On Site Care Taker Name must be at least 2 characters.",
  }),
});

type Amenity = {
  amenityId: string;
  amenityName: string;
};

type newAmenity = {
  newAmenity: Amenity[];
}


export function CheckListForm({newAmenity} : newAmenity) {
  const [Steps, setSteps] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [EmailMessage, setEmailMessage] = useState("");
  // defualt all to false
  const [Amenities, setAmenities] = useState<Record<string, boolean>>({});

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      propertyName: "",
      bookingId: "",
      dateOfCheck: "",
      checkConductedBy: "",
      propertyManagerName: "",
      onSiteCareTakerName: "",
    },
  });

  newAmenity.map((amenity, index) => {
    if (Amenities[amenity.amenityName] === undefined) {
      setAmenities((prev) => ({
        ...prev,
        [amenity.amenityName]: false,
      }));
    }
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const UpdatedFormData = { ...values, Amenities };
    setLoading(true);
    const sendEmail = await SendEmail(UpdatedFormData);
    //ignore the error
    if (sendEmail) {
      setLoading(false);
      setEmailMessage("Email Sent Successfully");
    } else {
      setEmailMessage("Email Not Sent");
    }
  };

  
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-7"
      >
        {/* step 1 */}
        <div
          className={cn("flex flex-col gap-7", {
            hidden: Steps !== 1,
          })}
        >
          {/* Villa Property Name: */}
          <FormField
            control={form.control}
            name="propertyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Villa Property Name: </FormLabel>
                <FormControl>
                  <Input placeholder="Viall Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="grid grid-cols-2 gap-7">
            {/* Boking Id */}
            <FormField
              control={form.control}
              name="bookingId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Booking ID no. </FormLabel>
                  <FormControl>
                    <Input placeholder="Booking ID No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Date */}
            <FormField
              control={form.control}
              name="dateOfCheck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Date Of Check: </FormLabel>
                  <FormControl>
                    <Input placeholder="Today's Date" type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* check counduted by */}
          <FormField
            control={form.control}
            name="checkConductedBy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Check Conducted By: </FormLabel>
                <FormControl>
                  <Input placeholder="Conducted By" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Property Manager Name */}
          <FormField
            control={form.control}
            name="propertyManagerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Property Manger Name : </FormLabel>
                <FormControl>
                  <Input placeholder="Manager Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* on site care taker name */}
          <FormField
            control={form.control}
            name="onSiteCareTakerName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>On site Care taker: </FormLabel>
                <FormControl>
                  <Input placeholder="On site Care taker" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Step 2*/}
        <div
          className={cn("flex flex-col gap-5", {
            hidden: Steps !== 2,
          })}
        >
          <div className="flex justify-between">
            <span>Name of the Amenity</span>
            <span>
              Status{" "}
              <span className="text-14px">if working then mark the status</span>
            </span>
          </div>
          <Separator />
          {newAmenity.map((amenity, index) => {
            return (
              <div className="flex flex-col gap-5" key={amenity.amenityId}>
                <FormField
                  name={amenity.amenityId}
                  render={({}) => (
                    <FormItem className="flex flex-row justify-between items-center w-full">
                      <FormLabel className="w-[100%] capitalize">
                        {amenity.amenityName}{" "}
                      </FormLabel>
                      <FormControl className="w-[10%]">
                        <Input
                          type="checkbox"
                          onChange={() => {
                            setAmenities((prev) => ({
                              ...prev,
                              // Toggle the value.
                              [amenity.amenityName]: !prev[amenity.amenityName],
                            }));
                          }}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Separator />
              </div>
            );
          })}
        </div>

        {/* Buttons */}
        <div className="flex gap-7 justify-between">
          <Button
            type="submit"
            variant="default"
            className={cn({
              hidden: Steps === 1,
            })}
          >
            Submit
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={cn({
              hidden: Steps === 2,
            })}
            onClick={() => {
              //validate
              form.trigger([
                "propertyName",
                "bookingId",
                "checkConductedBy",
                "onSiteCareTakerName",
                "propertyManagerName",
                "dateOfCheck",
              ]);
              const propertyname = form.getFieldState("propertyName");
              const bookingId = form.getFieldState("bookingId");
              const checkConductedBy = form.getFieldState("checkConductedBy");
              const onSiteCareTakerName = form.getFieldState(
                "onSiteCareTakerName"
              );
              const propertyManagerName = form.getFieldState(
                "propertyManagerName"
              );
              const dateOfCheck = form.getFieldState("dateOfCheck");

              if (!propertyname.isDirty || propertyname.invalid) return;
              if (!bookingId.isDirty || bookingId.invalid) return;
              if (!checkConductedBy.isDirty || checkConductedBy.invalid) return;
              if (!onSiteCareTakerName.isDirty || onSiteCareTakerName.invalid)
                return;
              if (!propertyManagerName.isDirty || propertyManagerName.invalid)
                return;
              if (!dateOfCheck.isDirty || dateOfCheck.invalid) return;

              setSteps((perv) => perv + 1);
            }}
          >
            Next <ChevronRight className="w-4 h-4 ml-2" />{" "}
          </Button>
          <Button
            type="button"
            variant="secondary"
            className={cn({
              hidden: Steps === 1,
            })}
            onClick={() => {
              setSteps((perv) => perv - 1);
            }}
          >
            <ChevronLeft className="w-4 h-4 mr-2" /> Perv
          </Button>
          
          <div>{EmailMessage}</div>
        </div>
      </form>
    </Form>
  );
}
