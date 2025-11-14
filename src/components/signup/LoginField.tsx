'use client'
import { toast } from 'react-hot-toast';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type LoginFormData, loginFormSchema } from '@/data/signup-schema/schema';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { LoginFieldRendered } from '../FormField/LoginFieldRendered';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/context/AppContext';

export function LoginField() {
    const {setWalletBalance} = useAppContext();
    const [success, setSuccess] = useState(false);
    const router = useRouter();
    const formItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2 + 0.6,
                duration: 0.5,
                type: 'spring',
                stiffness: 200,
                damping: 20,
            },
        }),
    }

    const form = useForm<LoginFormData>({
        resolver: zodResolver(loginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })

    async function onSubmit(values: LoginFormData) {
        setSuccess(true);
        try {
            const loginApi = await axios.post('https://nest-js-knb6.onrender.com/users/login', values);
            const res = loginApi.data;
            const id = res.user._id;
            localStorage.setItem('_id', id);
            const token = res.token
            localStorage.setItem('token', token);
            const wallet = res.user.wallet
            console.log(wallet);
            setWalletBalance(wallet);
            
            localStorage.setItem('wallet', wallet);
            if (loginApi) {
                toast('Log in successful');
                router.push("/home");
            };
        } catch (error) {
            console.log('error_msg', error);
            
            if (error) {
                toast(`Invalid credentials`);
                router.push("/login-page");
            }
        } finally {
            setSuccess(false);
        }
    }

    return (
        <motion.div
            className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.5,
                delay: 0.3,
            }}
        >
            <motion.div
                className="h-2 bg-green-600"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 1 }}
            />

            <div className="px-8 py-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign in to your account</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <motion.div custom={0} variants={formItemVariants} initial="hidden" animate="visible">
                            <LoginFieldRendered
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                label="Email Address"
                                required={true}
                                control={form.control}
                            />
                        </motion.div>

                        <motion.div custom={1} variants={formItemVariants} initial="hidden" animate="visible">
                            <LoginFieldRendered
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                label="Password"
                                required={true}
                                control={form.control}
                            />
                        </motion.div>

                        <motion.div
                            custom={2}
                            variants={formItemVariants}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <Button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 transition-colors text-white font-semibold cursor-pointer"
                            >
                                {success ? 'loading....' : 'Signin'}
                            </Button>
                        </motion.div>
                    </form>
                </Form>
            </div>
        </motion.div>
    )
}