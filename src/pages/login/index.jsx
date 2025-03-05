import LoginAnimate from "../../assets/login-animate.svg"
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function PageLogin() {
    
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#F7F7F7]" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            <div className="w-[80%] h-[80%] rounded-[20px] flex overflow-hidden bg-[#58B788]" style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}>
                <div className="w-[45%] h-[100%] flex items-center justify-center">
                    <img src={LoginAnimate} className="w-[95%]" />
                </div>

                <div className="bg-white w-[55%] flex flex-col items-center justify-center gap-[15px]">
                    <h1 className="text-[#58B788] text-[35px] font-bold">Login</h1>

                    <div className="w-[55%] flex flex-col gap-[5px]">
                        {/* Campo de Email */}
                        <div className="relative w-full">
                            {/* Ícone */}
                            <label
                                htmlFor="email"
                                className="absolute left-[12px] top-1/2 -translate-y-1/2 cursor-text transition-all duration-300 ease-in-out "
                            >
                                <HiOutlineMail className="text-[#AFAFAF] text-[25px]" />
                            </label>

                            {/* Input */}
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className=" w-full h-[50px] pl-[45px] pr-[15px] bg-[#F9F9F9] border-[2px] border-solid border-[#CCCCCC] rounded-[5px] transition-all duration-300 ease text-[#333333] text-[16px] hover:border-[#58B788] hover:shadow-[0_0_5px_#58B788] focus:border-[#58B788] focus:outline-none"
                                required
                            />
                        </div>

                        {/* Campo de Senha */}
                        <div className="relative w-full">
                            {/* Ícone */}
                            <label
                                htmlFor="password"
                                className="absolute left-[12px] top-1/2 -translate-y-1/2 cursor-text transition-all duration-300 ease-in-out "
                            >
                                <MdLockOutline className="text-[#AFAFAF] text-[25px]" />
                            </label>

                            {/* Input */}
                            <input
                                type="password"
                                id="password"
                                placeholder="Senha"
                                className=" w-full h-[50px] pl-[45px] pr-[15px] bg-[#F9F9F9] border-[2px] border-solid border-[#CCCCCC] rounded-[5px] transition-all duration-300 ease text-[#333333] text-[16px] hover:border-[#58B788] hover:shadow-[0_0_5px_#58B788] focus:border-[#58B788] focus:outline-none"
                                required
                            />
                        </div>

                        {/* Checkbox "Remember Me" e Link "Forgot Password" */}
                        <div className="pl-[3px] flex justify-between items-center mt-[2px] text-[14px]">
                            <div className="flex items-center gap-[5px]">
                                <input
                                    id="remember"
                                    type="checkbox"
                                    className="w-[18px] h-[18px] accent-[#58B788] rounded-[3px]"
                                />
                                <label htmlFor="remember" className="text-[#333333] cursor-pointer">
                                    Lembar-me
                                </label>
                            </div>

                            {/* Link "Forgot Password" */}
                            <a
                                href="../pages/reset-password.html"
                                className="pr-[3px] text-[#58B788] font-bold no-underline transition-all duration-300 ease-in-out hover:text-[#333333] active:opacity-[70%]"
                            >
                                Esqueci a senha
                            </a>
                        </div>

                        {/* Botão de Login */}
                        <a
                            href="/dashboard"
                            id="btn-login"
                            className="w-full py-[3px] text-[18px] font-[arial] font-semibold text-white text-center bg-[#58B788] border-[2px] border-[#58B788] rounded-[5px] transition-all duration-300 ease-in-out hover:bg-[#58B7881F] hover:text-[#58B788] hover:border-[#58B788] hover:shadow-[0_0_5px_#58B788] active:opacity-90 active:scale-97"
                        >
                            ENTRAR
                        </a>

                        {/* Texto "Don't have an account?" */}
                        <p className="text-[#333333] text-[14px] text-center">
                            Não tem uma conta?
                            <a
                                href="/criar-conta"
                                className="text-[#58B788] font-bold no-underline transition-all duration-200 ease-in-out hover:text-[#333333] active:opacity-[70%]"
                            >
                                Cadastrar
                            </a>
                        </p>
                    </div>

                    <h2 className="text-[22px] text-[#58B785] font-semibold">or connect with:</h2>

                    <div className="flex gap-[15px]">
                        <a href="https://www.facebook.com" target="_blank" className="transition-all duration-300 ease-in-out active:opacity-[80%]">
                            <FaFacebookF className="w-[50px] h-[50px] p-[11px] text-[#AFAFAF] border-[2px] border-[#CCCCCC] rounded-[50%] transition-all duration-300 ease-in-out hover:text-[#58B785] hover:border-[#58B785] hover:bg-[#58B7881F] overflow-visible" />
                        </a>
                        <a href="https://accounts.google.com/" target="_blank" className="transition-all duration-300 ease-in-out active:opacity-[80%]">
                            <FaGoogle className="w-[50px] h-[50px] p-[12px] text-[#AFAFAF] border-[2px] border-[#CCCCCC] rounded-[50%] transition-all duration-300 ease-in-out hover:text-[#58B785] hover:border-[#58B785] hover:bg-[#58B7881F] overflow-visible" />
                        </a>
                        <a href="https://www.linkedin.com/in/denilson-bezerra" target="_blank" className="transition-all duration-300 ease-in-out active:opacity-[80%]">
                            <FaLinkedinIn  className="w-[50px] h-[50px] p-[12px] text-[#AFAFAF] border-[2px] border-[#CCCCCC] rounded-[50%] transition-all duration-300 ease-in-out hover:text-[#58B785] hover:border-[#58B785] hover:bg-[#58B7881F] overflow-visible" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}