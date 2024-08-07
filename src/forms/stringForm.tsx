import { useForm } from "react-hook-form";
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

const formSchema = z.object({
    name: z.string().min(1, 'ข้อมูลไม่ถูกต้อง'),
});


export type stringForm = z.infer<typeof formSchema>;

type Props = {
    currentMovie: { name: string };
    onSave: (data: stringForm) => void;
    isLoading: boolean;
    title?: string;
    buttonText?: string;
};

const StringForm = ({
    onSave,
    isLoading,
    currentMovie,
    title = "แก้ไขชื่อโรงภาพยนตร์",
    buttonText = "ยืนยัน",
}: Props) => {
    const form = useForm<stringForm>({
        resolver: zodResolver(formSchema),
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
                    name="name"
                    render={({ field }) => (
                        <FormItem className="kanit-light">
                            <FormLabel>ชื่อ </FormLabel>
                            <FormControl>
                                <Input {...field} className="bg-white" />
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

export default StringForm;
