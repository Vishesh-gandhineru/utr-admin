
import React from 'react'
import { CheckListForm } from '@/components/ChecklistForm/CheckListForm'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { CheckListOptions } from "@/lib/ChecklistOptions";

const CheckList = ({ params }: { params: { formData: string } }) => {

    const decodedFormData = decodeURIComponent(params.formData);
    const parsedFormData= JSON.parse(decodedFormData);


  return (
    <section className='my-10 flex justify-center items-center'>
        <Card className='w-[700px] flex flex-col justify-center items-center'>
  <CardHeader className='text-center'>
    <CardTitle>Property Checklist</CardTitle>
    <CardDescription>Under the Roof Stay Villa property CheckList</CardDescription>
  </CardHeader>
  <CardContent className='w-full'>
  <CheckListForm newAmenity={parsedFormData}/>
  </CardContent>
</Card>
    </section>
  )
}

export default CheckList