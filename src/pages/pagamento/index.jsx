import { useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";
import { ToastContainer, toast } from 'react-toastify';
import instance from "../../api/instance";

export default function PagePagamento() {
    const [nome, setNome] = useState("");
    const [numero, setNumero] = useState("");
    const [mes, setMes] = useState("");
    const [ano, setAno] = useState("");
    const [cvv, setCvv] = useState("");
    const [senha, setSenha] = useState("");

    const formatCvvWithZero = (value) => {
        return value.padEnd(3, "0").slice(0, 3);
    };

    const formatDateWithZero = (value) => {
        return value.padStart(2, "0").slice(0, 2);
    };

    function handleCardNumFormater(e) {
        const inputValue = e.target.value.replace(/\D/g, "");
        const formattedValue = inputValue
            .replace(/(\d{4})(?=\d)/g, "$1 ")
            .substring(0, 19);
        setNumero(formattedValue);
    };

    async function sendCartao(e) {
        e.preventDefault()

        if (!nome || !numero || !mes || !ano || !cvv || !senha) {
            toast.error("Por favor, preencha todos os campos!")
            return
        }

        if (nome.length < 3 || nome.length > 22) {
            toast.error("Nome inválido.")
            return
        }

        const currentDate = new Date()
        const dateCard = new Date(`20${ano}`, mes - 1, 1)

        if (Number(mes) < 1 || Number(mes) > 12) {
            toast.error("Data de expiração inválida")
            return
        }

        if (dateCard < currentDate) {
            toast.error("Cartão expirado!")
            return
        }

        if (cvv.length !== 3) {
            toast.error("CVV inválido!")
            return
        }

        if (senha.length < 4 || senha.length > 6) {
            toast.error("Senha inválida!")
            return
        }

        try {
            await instance.post("/creditcards", {
                name: nome,
                number: numero.replace(/\D/g, ''),
                expiration: `${mes}/${ano}`,
                cvv: cvv,
                password: senha
            })

            toast.success("Cartão validado! Processando dados de pagamento...")
        } catch (error) {
            toast.error("Erro ao enviar os dados do cartão")
            console.error(error)
        }
    }

    return (
        <div className="w-full h-screen flex">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                closeOnClick={true}
                theme="colored"
            />
            <div className="w-[50%] h-full relative">
                <div className="w-[60%] h-full bg-[#58B788]"></div>
                <div className="w-[40%] h-full bg-[#F7F7F7]"></div>
                <div className="w-full h-full absolute top-0 flex flex-col">
                    <div className="w-[500px] h-[300px] bg-linear-to-tr from-[#0F2D2F] to-[#58B78F] rounded-[10px] mt-[30px] ml-[70px]">
                        <div className="w-full h-[30%] flex">
                            <div className="w-[30%] h-full flex items-center justify-center gap-[7px]">
                                <div className="bg-white w-[55px] h-[55px] rounded-full"></div>
                                <div className="bg-white w-[40px] h-[40px] rounded-full"></div>
                            </div>
                            <div className="w-[70%] h-full flex items-start justify-end pr-[20px] pt-[17px]">
                                <p className="text-white font-medium text-[25px]">Infinity Bank</p>
                            </div>
                        </div>
                        <div className="w-full h-[25%] pl-[20px] flex items-center">
                            <FcSimCardChip size={65} />
                            <LuNfc size={35} color="white" />
                        </div>
                        <div className="w-full">
                            <p className="text-[#CDCDCD] text-[32px] pl-[20px] tracking-[5px] font-semibold">
                                {numero
                                    .replace(/\D/g, "")
                                    .padEnd(16, "0")
                                    .replace(/(\d{4})(?=\d)/g, "$1 ")
                                    .trim() || "0000 0000 0000 0000"}
                            </p>

                            <p className="text-white text-[35px] pl-[20px] tracking-wide font-semibold">
                                {nome || "Preencher Nome"}
                            </p>
                        </div>
                    </div>
                    <div className="w-[500px] h-[300px] bg-linear-to-tr from-[#0F2D2F] to-[#58B78F] rounded-[10px] mt-[30px] ml-[200px]">
                        <div className="h-[30%] flex items-end">
                            <div className="w-full h-[65%] bg-neutral-400"></div>
                        </div>
                        <div className="w-full h-[70%] flex flex-col items-center pt-[30px]">
                            <div className="w-[75%] h-[50px] bg-neutral-300 p-[20px] flex justify-between items-center">
                                <p className="text-[18px] font-bold">CVV:</p>
                                <p className="text-[28px] tracking-wide">{cvv ? formatCvvWithZero(cvv) : "000"}</p>
                            </div>
                            <div className="w-[75%] flex justify-between items-center p-[20px]">
                                <p className="text-[18px] text-white font-bold">VAL:</p>
                                <p className="text-end text-[28px] tracking-wide text-white font-bold">
                                    {mes ? formatDateWithZero(mes) : "MM"}/{ano ? formatDateWithZero(ano) : "AA"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[50%] h-full">
                <div className="w-full h-[20%] pt-[20px] ml-[-10%]">
                    <h1 className="text-[60px]">Preencha seus dados</h1>
                </div>
                <div className="w-full h-[80%] flex justify-start">
                    <form onSubmit={sendCartao}
                        className="w-[50%] h-full flex flex-col gap-2">
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="nome" className="text-[20px]">Nome no cartão</label>
                            <input
                                id="nome"
                                type="text"
                                className="w-full p-[10px] bg-[#D9D9D9] rounded text-[20px]"
                                placeholder="Preencher Nome"
                                maxLength={22}
                                value={nome}
                                onChange={(e) => {
                                    const value = e.target.value.replace(/[^\p{L}\s]/gu, "");
                                    setNome(value);
                                }}
                            />
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="numero" className="text-[20px]">Número do cartão</label>
                            <input
                                id="numero"
                                type="text"
                                className="w-full p-[10px] bg-[#D9D9D9] rounded text-[20px]"
                                placeholder="0000 0000 0000 0000"
                                value={numero}
                                onChange={(e) => handleCardNumFormater(e)}
                            />
                        </div>
                        <div className="w-full flex">
                            <div className="w-[65%] flex flex-col gap-1">
                                <label htmlFor="dataM" className="text-[20px]">Data de expiração</label>
                                <div className="flex gap-3">
                                    <input
                                        id="dataM"
                                        type="text"
                                        className="w-[48%] p-[10px] bg-[#D9D9D9] rounded text-[20px]"
                                        placeholder="MM"
                                        maxLength={2}
                                        onChange={(e) => {
                                            setMes(e.target.value.replace(/\D/g, ""));
                                        }}
                                    />
                                    <input
                                        id="dataA"
                                        type="text"
                                        className="w-[48%] p-[10px] bg-[#D9D9D9] rounded text-[20px]"
                                        placeholder="AA"
                                        maxLength={4}
                                        onChange={(e) => {
                                            const value = e.target.value.replace(/\D/g, "");
                                            setAno(value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="w-[35%] flex flex-col gap-1 pl-2.5">
                                <label htmlFor="cvv" className="text-[20px]">CVV</label>
                                <input
                                    id="cvv"
                                    type="text"
                                    className="w-full p-[10px] bg-[#D9D9D9] rounded text-[20px]"
                                    placeholder="000"
                                    maxLength={3}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, "");
                                        setCvv(value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-1">
                            <label htmlFor="senha" className="text-[20px]">Senha do cartão</label>
                            <input
                                id="senha"
                                type="password"
                                className="w-full p-[10px] bg-[#D9D9D9] rounded text-[20px]"
                                placeholder="••••••"
                                maxLength={6}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>
                        <div className="w-full flex items-center justify-center">
                            <button
                                type="submit"
                                className="w-full h-[50px] cursor-pointer transition-all duration-300 ease-out text-[25px] font-bold text-white bg-[#58B788] border-2 border-solid border-[#58B788] rounded mt-2 hover:text-[#58B788] hover:bg-[#58B7881F] active:opacity-[0.9] active:transform-[scale(0.97)]"
                            >
                                Comprar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}