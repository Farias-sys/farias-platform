export default function ModalNLW(){
    return(<>
    <div className="Header text-center align-middle mt-2">
        <h1 className="Title text-white font-ubuntu font-semibold text-[1.5rem]">Projeto - NLW Setup</h1>
    </div>

    <div className="Content-container">
        <div className="Description border-red-900 border-2 border-solid w-[90%] h-auto ml-6 mt-6">
            <h1 className="Label w-20 text-white text-left mt-[-1rem] ml-4 px-2 bg-zinc-700">
                Descrição
            </h1>
            <h2 className="Description-text text-white text-justify m-4 mt-1 font-ubuntu font-thin">
                Aplicação ponta-a-ponta desenvolvida durante bootcamp da Rocketseat com o intuito de rastrear hábitos.
            </h2>
        </div>
        <div className="Stacks border-red-900 border-2 border-solid w-[90%] h-auto ml-6 mt-4">
            <h1 className="Label w-16 text-white text-left mt-[-1rem] ml-4 px-2 bg-zinc-700">
                Stacks
            </h1>
            <div className="Icons ml-2 my-2 text-center">
                <box-icon name='react' type='logo' size={'lg'} ></box-icon>
                <box-icon type='logo' name='nodejs' size={'lg'}></box-icon>
                <box-icon type='logo' name='tailwind-css' size={'lg'}></box-icon>
                <box-icon type='solid' name='data' size={'lg'}></box-icon>
            </div>
        </div>

        <a href="https://github.com/Farias-sys/Rocketseat-NLWSetup">
            <div className="Btn w-40 h-12 ml-40 mt-8 rounded-lg bg-red-800 text-white font-ubuntu text-md">
                <h1 className="Label text-center align-middle justify-center py-3">Quero conhecer!</h1>
            </div>
        </a>
    </div>
    </>)
}