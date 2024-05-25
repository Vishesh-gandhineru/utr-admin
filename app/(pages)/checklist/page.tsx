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

const CheckList = () => {
  return (
    <section className='my-10 flex justify-center items-center'>
        <Card className='w-[700px] flex flex-col justify-center items-center'>
  <CardHeader className='text-center'>
    <CardTitle>Property Checklist</CardTitle>
    <CardDescription>Under the Roof Stay Villa property CheckList</CardDescription>
  </CardHeader>
  <CardContent className='w-full'>
  <CheckListForm />
  </CardContent>
</Card>
    </section>
  )
}

export default CheckList