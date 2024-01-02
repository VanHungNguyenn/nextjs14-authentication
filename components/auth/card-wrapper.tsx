'use client'
import React, { ReactNode } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

interface CardWrapperProps {
	children: ReactNode
	headerLabel: string
	backButtonLabel: string
	backButtonHref: string
	showSocial?: boolean
}

const CardWrapper = ({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
	showSocial = false,
}: CardWrapperProps) => {
	return (
		<Card className='w-[400px] shadow-md'>
			<CardHeader>
				<CardTitle>Create project</CardTitle>
				<CardDescription>
					Deploy your new project in one-click.
				</CardDescription>
			</CardHeader>
			<CardContent>{children}</CardContent>
			<CardFooter className='flex justify-between'></CardFooter>
		</Card>
	)
}

export default CardWrapper
