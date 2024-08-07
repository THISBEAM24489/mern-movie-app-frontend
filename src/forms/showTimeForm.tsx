import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DateTimePicker from "@/components/datePicker";

const showTimeShema = z.object({
    seat: z.number(),
    date: z.date()
});

export type showTimeForm = z.infer<typeof showTimeShema>;

type Props = {
    currentMovie: { seat: number, date: Date };
    onSave: (data: showTimeForm) => void;
    isLoading: boolean;
    title?: string;
    buttonText?: string;
};

const ShowTimeForm = ({
    onSave,
    isLoading,
    currentMovie,
    title = "เพื่มรอบภาพยนตร์",
    buttonText = "ยืนยัน",
}: Props) => {
    const form = useForm<showTimeForm>({
        resolver: zodResolver(showTimeShema),
        defaultValues: currentMovie,
    });

    useEffect(() => {
        form.reset(currentMovie);
    }, [currentMovie, form]);

    return (
        <Form  {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className="space-y-4 bg-gray-50 rounded-lg md:p-10"
            >
                <div className="kanit-light">
                    <DialogTitle>{title}</DialogTitle>
                </div>
                <FormField
                    control={form.control}
                    name="seat"
                    render={({ field }) => (
                        <FormItem className="kanit-light">
                            <FormLabel>จํานวนที่นั่ง </FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                        <FormItem className="kanit-light flex flex-row gap-2 justify-start items-center">
                            <FormLabel><span>วันที่และเวลา</span></FormLabel>
                            <FormControl>
                                <Controller
                                    control={form.control}
                                    name="date"
                                    render={({ field: { onChange, value } }) => (
                                        <DateTimePicker
                                            value={value}
                                            onChange={(date) => {


                                                onChange(date);
                                            }}
                                        />
                                    )}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {isLoading ? (
                    <span>loading...</span>
                ) : (
                    <DialogTrigger asChild>
                        <Button type="submit" className="bg-yellow-500 kanit-medium">
                            {buttonText}
                        </Button>
                    </DialogTrigger>
                )}
            </form>
        </Form>
    );
};

export default ShowTimeForm;
