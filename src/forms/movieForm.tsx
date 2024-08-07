import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Movie } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
    _id: z.string(),
    name: z.string().min(1, 'name is name is required'),
    description: z.string().min(1, 'description is required'),
    image: z.string().min(1, ' image is required'),
    tailer: z.string().min(1, ' image is required'),
});


export type MovieFormData = z.infer<typeof formSchema>;

type Props = {
    currentMovie: Movie;
    onSave: (movieData: MovieFormData) => void;
    isLoading: boolean;
    title?: string;
    buttonText?: string;
};



const MovieForm = ({
    onSave,
    isLoading,
    currentMovie,
    title = "แก้ไขข้อมูลภาพยนตร์",
    buttonText = "Submit",
}: Props) => {
    const form = useForm<MovieFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: currentMovie,
    });

    useEffect(() => {
        form.reset(currentMovie);
    }, [currentMovie, form]);

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSave)}
                className="space-y-4 w-full bg-zinc-900 rounded-lg p-2  text-white"
            >
                <div>
                    <h2 className="text-2xl font-bold text-white">{title}</h2>
                    <FormDescription className="text-white">
                        รีวิวเเละเเก้ใขข้อมูลภาพยนตร์ได้ที่นี่
                    </FormDescription>

                </div>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ขื่อ</FormLabel>
                            <FormControl>
                                <Input {...field} className=" bg-gray-300 text-black font-medium" />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>คําบรรยาย</FormLabel>
                            <FormControl>
                                <Input {...field} className=" bg-gray-300 text-black font-medium" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="image"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>โปสเตอร์</FormLabel>
                            <FormControl>
                                <Input {...field} className=" bg-gray-300 text-black font-medium" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="tailer"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>ตัวอย่างภาพยนตร์</FormLabel>
                            <FormControl>
                                <Input {...field} className=" bg-gray-300 text-black font-medium" />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                {isLoading ? (
                    <span>loading...</span>
                ) : (
                    <Button type="submit" className="bg-orange-500">
                        {buttonText}
                    </Button>
                )}
            </form>
        </Form>
    );
};

export default MovieForm;
