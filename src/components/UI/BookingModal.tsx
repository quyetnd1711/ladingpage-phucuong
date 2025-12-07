import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { FaTimes } from 'react-icons/fa';
import Input from '../UI/Input';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import { timeSlots } from '../../data/content';

const bookingSchema = z.object({
    name: z.string().min(2, 'Tên phải có ít nhất 2 ký tự'),
    phone: z.string().regex(/^[0-9]{10}$/, 'Số điện thoại không hợp lệ'),
    email: z.string().email('Email không hợp lệ'),
    date: z.string().min(1, 'Vui lòng chọn ngày'),
    timeSlot: z.string().min(1, 'Vui lòng chọn khung giờ'),
    guests: z.string().min(1, 'Vui lòng nhập số lượng khách'),
    notes: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    });

    const onSubmit = async (data: BookingFormData) => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        console.log('Booking data:', data);
        setIsSubmitting(false);
        setShowSuccessModal(true);
        reset();
    };

    const handleCloseSuccessModal = () => {
        setShowSuccessModal(false);
        onClose();
    };

    // Get today's date in YYYY-MM-DD format for min date
    const today = new Date().toISOString().split('T')[0];

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} title="">
                <div className="relative">
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute -top-2 -right-2 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                    >
                        <FaTimes className="text-gray-600" />
                    </button>

                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gradient-christmas mb-3">
                            Đặt Bàn Ngay
                        </h2>
                        <p className="text-gray-600">
                            Điền thông tin bên dưới để đặt bàn. Chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <Input
                                label="Họ và tên *"
                                placeholder="Nguyễn Văn A"
                                {...register('name')}
                                error={errors.name?.message}
                            />

                            <Input
                                label="Số điện thoại *"
                                type="tel"
                                placeholder="0912345678"
                                {...register('phone')}
                                error={errors.phone?.message}
                            />

                            <Input
                                label="Email *"
                                type="email"
                                placeholder="example@email.com"
                                {...register('email')}
                                error={errors.email?.message}
                            />

                            <Input
                                label="Ngày đặt bàn *"
                                type="date"
                                min={today}
                                {...register('date')}
                                error={errors.date?.message}
                            />

                            <Input
                                label="Khung giờ *"
                                options={timeSlots.map((slot) => ({ value: slot, label: slot }))}
                                {...register('timeSlot')}
                                error={errors.timeSlot?.message}
                            />

                            <Input
                                label="Số lượng khách *"
                                type="number"
                                min="1"
                                placeholder="4"
                                {...register('guests')}
                                error={errors.guests?.message}
                            />
                        </div>

                        <Input
                            label="Ghi chú"
                            multiline
                            rows={3}
                            placeholder="Yêu cầu đặc biệt (nếu có)..."
                            {...register('notes')}
                        />

                        <div className="flex gap-3 pt-4">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={onClose}
                                className="flex-1"
                            >
                                Hủy
                            </Button>
                            <Button
                                type="submit"
                                size="large"
                                className="flex-1"
                                loading={isSubmitting}
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
                            </Button>
                        </div>
                    </form>
                </div>
            </Modal>

            {/* Success Modal */}
            <Modal
                isOpen={showSuccessModal}
                onClose={handleCloseSuccessModal}
                title="Đặt Bàn Thành Công!"
            >
                <div className="text-center py-6">
                    <div className="text-6xl mb-4">🎉</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Cảm ơn bạn đã đặt bàn!
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Chúng tôi đã nhận được yêu cầu đặt bàn của bạn. Nhân viên sẽ liên hệ xác nhận trong thời gian sớm nhất.
                    </p>
                    <Button onClick={handleCloseSuccessModal}>Đóng</Button>
                </div>
            </Modal>
        </>
    );
};

export default BookingModal;
