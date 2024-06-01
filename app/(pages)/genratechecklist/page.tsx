"use client"

import React, { ReactEventHandler } from 'react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { CheckListOptions } from '@/lib/ChecklistOptions'
import { v4 as uuidv4 } from 'uuid';
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Trash2Icon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { set } from 'zod'

const GenrateCheckList = () => {

    const [Amenities, setAmenities] = useState(CheckListOptions);
    const [newAmenity, setNewAmenity] = useState("");

    const router = useRouter();

    const generateLink = () => {
        const formData = JSON.stringify(Amenities);
        const encodedFormData = encodeURIComponent(formData);
        router.push(`/checklist/${encodedFormData}`);
      };
    

    const AddAmenutiItem = () => {
        const updateAmenity = {
          amenityId: uuidv4(),
          amenityName: newAmenity,
        };
        setAmenities([...Amenities, updateAmenity]);
    }
 
    const removeAmenity = (amenityId : string) => {
        const updatedAmenities = Amenities.filter(
          (amenity) => amenity.amenityId !== amenityId );
          setAmenities(updatedAmenities);
    }
 
  return (

    
    <section>
      <div className="max-w-xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold">Amenity List</h1>
      <div className="space-y-2">
        {Amenities.map((amenity) => (
          <div
            key={amenity.amenityId}
            className="flex items-center justify-between bg-white dark:bg-gray-950 rounded-lg shadow-sm p-4"
          >
            <div className="flex items-center space-x-3">
              <label
                
              >
                {amenity.amenityName}
              </label>
            </div>
            <Button variant="ghost" size="icon" onClick={()=>removeAmenity(amenity.amenityId)}>
              <Trash2Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>
        ))}
        
        <div className="flex items-center mb-14">
        <Input
          type="text"
          placeholder="Add a new checklist item"
          className="flex-1 mr-2 px-3 py-2 border rounded-md"
          value={newAmenity}
          onChange={(e) => setNewAmenity(e.target.value)}
        />
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md" onClick={AddAmenutiItem}>
          Add
        </Button>
      </div>
      <Button variant="secondary" className='w-full' onClick={generateLink}>Genrate Checklist</Button>
      </div>
    </div>
    </section>
  )
}

export default GenrateCheckList