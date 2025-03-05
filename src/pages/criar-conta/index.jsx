import SignUpAnimate from "../../assets/sign-up-animate.svg"
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { MdLockOutline } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function PageCriarConta() {

    return (
        <div className="w-screen h-screen flex items-center justify-center bg-[#F7F7F7]" style={{ fontFamily: "Verdana, Geneva, Tahoma, sans-serif" }}>
            <div className="w-[80%] h-[80%] rounded-[20px] flex overflow-hidden bg-[#58B788]" style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.25)" }}>
                <div className="w-[45%] h-[100%] p-[55px] flex flex-col items-center justify-center">
                    <h1 className="text-white text-[35px] font-bold">Bem-vindo de volta!</h1>

                    <p className="text-[#F7F7F7] text-[20px]">Para se manter conectado com<br />a gente, entre com seus dados.</p>

                    {/* Botão de Login */}
                    <a
                        href="/"
                        id="btn-login"
                        className="w-[70%] mt-[5px] py-[3px] text-[18px] font-[arial] font-semibold text-white text-center bg-none border-[2px] border-white rounded-[5px] transition-all duration-300 ease-in-out hover:text-[#58B788] hover:bg-white hover:shadow-[0_0_5px_#FFFFFF] active:opacity-90 active:scale-97"
                    >
                        ENTRAR
                    </a>

                    <img src={SignUpAnimate} className="w-[70%] mt-[20px]" />
                </div>

                <div className="bg-white w-[55%] flex flex-col items-center justify-center gap-[15px]">
                    <h1 className="text-[#58B788] text-[35px] font-bold">Criar Conta</h1>

                    <div className="w-[55%] flex flex-col gap-[5px]">
                        {/* Campo de Nome */}
                        <div className="relative w-full">
                            {/* Ícone */}
                            <label
                                htmlFor="nome"
                                className="absolute left-[12px] top-1/2 -translate-y-1/2 cursor-text transition-all duration-300 ease-in-out"
                            >
                                <FaRegUser className="text-[#AFAFAF] text-[21px] ml-[2px]" />
                            </label>

                            {/* Input */}
                            <input
                                type="text"
                                id="nome"
                                placeholder="Nome"
                                className=" w-full h-[50px] pl-[45px] pr-[15px] bg-[#F9F9F9] border-[2px] border-solid border-[#CCCCCC] rounded-[5px] transition-all duration-300 ease text-[#333333] text-[16px] hover:border-[#58B788] hover:shadow-[0_0_5px_#58B788] focus:border-[#58B788] focus:outline-none"
                                required
                            />
                        </div>
                        {/* Campo de Email */}
                        <div className="relative w-full">
                            {/* Ícone */}
                            <label
                                htmlFor="email"
                                className="absolute left-[12px] top-1/2 -translate-y-1/2 cursor-text transition-all duration-300 ease-in-out"
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

                        {/* Botão de Criar */}
                        <a
                            href="/dashboard"
                            id="btn-criar"
                            className="w-full py-[3px] text-[18px] font-[arial] font-semibold text-white text-center bg-[#58B788] border-[2px] border-[#58B788] rounded-[5px] transition-all duration-300 ease-in-out hover:bg-[#58B7881F] hover:text-[#58B788] hover:border-[#58B788] hover:shadow-[0_0_5px_#58B788] active:opacity-90 active:scale-97"
                        >
                            CRIAR
                        </a>
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
                            <FaLinkedinIn className="w-[50px] h-[50px] p-[12px] text-[#AFAFAF] border-[2px] border-[#CCCCCC] rounded-[50%] transition-all duration-300 ease-in-out hover:text-[#58B785] hover:border-[#58B785] hover:bg-[#58B7881F] overflow-visible" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}