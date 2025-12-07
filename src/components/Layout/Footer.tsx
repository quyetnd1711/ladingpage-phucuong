import React from 'react';
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaClock, FaEnvelope } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';
import { branches, socialLinks } from '../../data/content';

const Footer: React.FC = () => {
    return (
        <footer className="relative bg-gradient-to-br from-[#601f1c] via-[#4d1916] to-[#601f1c] text-white overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
            </div>

            {/* Main Footer Content */}
            <div className="relative section-padding">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Brand Section with Logo */}
                        <div className="lg:col-span-1">
                            {/* Logo */}
                            <div className="mb-6">
                                <img
                                    src="/images/logo-header.jpg"
                                    alt="Phú Cường Logo"
                                    className="h-20 md:h-24 mb-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
                                />
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Nhà Hàng Bánh Tráng Phú Cường
                                </h3>
                                <p className="text-lg text-[#efebd4] font-semibold mb-4">
                                    Bánh Tráng Cuốn Thịt Heo
                                </p>
                            </div>

                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Hương vị truyền thống Việt Nam, mang đến trải nghiệm ẩm thực đặc sắc và chất lượng hàng đầu từ năm 2010.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-[#efebd4]/20 rounded-full flex items-center justify-center group-hover:bg-[#efebd4] group-hover:text-[#601f1c] transition-all">
                                        <FaPhone className="text-[#efebd4] group-hover:text-[#601f1c]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Hotline</p>
                                        <a href="tel:1900636569" className="text-white font-bold hover:text-[#efebd4] transition-colors">
                                            1900 63 65 69
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-[#efebd4]/20 rounded-full flex items-center justify-center group-hover:bg-[#efebd4] group-hover:text-[#601f1c] transition-all">
                                        <FaClock className="text-[#efebd4] group-hover:text-[#601f1c]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Giờ mở cửa</p>
                                        <p className="text-white font-semibold">10:00 - 22:00 (Hàng ngày)</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 group">
                                    <div className="w-10 h-10 bg-[#efebd4]/20 rounded-full flex items-center justify-center group-hover:bg-[#efebd4] group-hover:text-[#601f1c] transition-all">
                                        <FaEnvelope className="text-[#efebd4] group-hover:text-[#601f1c]" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-400">Email</p>
                                        <a href="mailto:info@phucuong.vn" className="text-white font-semibold hover:text-[#efebd4] transition-colors">
                                            btthpc@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media */}
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-gray-300 mb-3">Kết nối với chúng tôi</p>
                                <div className="flex gap-3">
                                    <a
                                        href={socialLinks.facebook}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-[#efebd4]/20 to-transparent hover:from-[#1877f2] hover:to-[#1877f2] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                                    >
                                        <FaFacebook className="text-xl text-white" />
                                    </a>
                                    <a
                                        href={socialLinks.zalo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-gradient-to-br from-[#efebd4]/20 to-transparent hover:from-[#0068ff] hover:to-[#0068ff] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
                                    >
                                        <SiZalo className="text-xl text-white" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Branches Section - 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-1 w-12 bg-gradient-to-r from-[#efebd4] to-transparent rounded-full"></div>
                                <h4 className="text-2xl font-bold text-white">Hệ Thống Cơ Sở</h4>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-4">
                                {branches.map((branch) => (
                                    <div
                                        key={branch.id}
                                        className="group relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:border-[#efebd4]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#efebd4]/10 hover:-translate-y-1"
                                    >
                                        {/* Premium Badge */}
                                        {branch.type === 'premium' && (
                                            <div className="absolute -top-2 -right-2">
                                                <div className="relative">
                                                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full blur-sm"></div>
                                                    <span className="relative text-[10px] bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-3 py-1 rounded-full font-bold shadow-lg flex items-center gap-1">
                                                        <span>⭐</span> PREMIUM
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {/* Branch Name */}
                                        <h5 className="font-bold text-white text-lg mb-3 group-hover:text-[#efebd4] transition-colors">
                                            {branch.name}
                                        </h5>

                                        {/* Address */}
                                        <div className="flex gap-3 mb-3">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="w-8 h-8 bg-[#efebd4]/20 rounded-lg flex items-center justify-center group-hover:bg-[#efebd4] transition-colors">
                                                    <FaMapMarkerAlt className="text-[#efebd4] text-sm group-hover:text-[#601f1c]" />
                                                </div>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {branch.address}
                                            </p>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex gap-3 items-center">
                                            <div className="flex-shrink-0">
                                                <div className="w-8 h-8 bg-[#efebd4]/20 rounded-lg flex items-center justify-center group-hover:bg-[#efebd4] transition-colors">
                                                    <FaPhone className="text-[#efebd4] text-xs group-hover:text-[#601f1c]" />
                                                </div>
                                            </div>
                                            <a
                                                href={`tel:${branch.phone}`}
                                                className="text-gray-300 text-sm hover:text-white transition-colors font-medium"
                                            >
                                                {branch.phone}
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative border-t border-white/10 py-6 bg-black/20">
                <div className="container-custom">
                    <div className="flex justify-center items-center">
                        <p className="text-gray-300 text-sm text-center">
                            © 2025 Nhà Hàng Phú Cường. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
