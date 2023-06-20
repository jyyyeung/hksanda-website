'use client'

import {Alert} from 'flowbite-react'
import {HiInformationCircle} from 'react-icons/hi'

export default function AlertWithIcon() {
  return (
    <Alert color="failure" icon={HiInformationCircle}>
      <span>
        <p>
          <span className="font-medium">Info alert!</span>
          Change a few things up and try submitting again.
        </p>
      </span>
    </Alert>
  )
}
