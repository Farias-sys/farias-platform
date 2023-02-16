// eslint-disable-next-line
import "./App.css"
import {Header} from "./components/Header"
import { ReactTerminal } from "react-terminal";
import 'boxicons';
import { TerminalContextProvider } from "react-terminal";
import * as React from 'react'
import Modal from 'react-modal'
import ModalNLW from "./components/ModalNLW";
import ModalAdsys from "./components/ModalAdsys"

function App() {
  
  const[showNLWModal, setShowNLWModal] = React.useState(false)
  const handleCloseNLW =  () => setShowNLWModal(false)
  const handleOpenNLW = () => setShowNLWModal(true)

  const[showAdsysModal, setShowAdsysModal] = React.useState(false)
  const handleCloseAdsys = () => setShowAdsysModal(false)
  const handleOpenAdsys = () => setShowAdsysModal(true)

  let certifications = `- AWS Cloud Foudations (AWS Academy - 2023)__________________________________________________________________________________
  - Cambridge English First (FCE - C1/B2, Cambridge - 2023)____________________________________________________________________
  - Cybersecurity Essentials (Cisco - 2022)\n.__________________________________________________________________________________
  - CCNAv7: Network Introduction (Cisco - 2023)\n_______________________________________________________________________________
  - AWS Journey [Docker, Kubernetes, AWS and IaaS] (DIO - 2023)\n`

  let help = `Comandos: certifications (Exibe minhas principais certificações) - adsystem (SaaS de Estoque) - nlw (Projeto desenvolvido na Next Level Week)`

  const welcomeMsg = "Olá! Seja bem vindo a minha página de exibição de portfólio. Obrigado pelo interesse!"


  const commands = {
    whoami:"Carlos Alberto",
    certifications:certifications,
    nlw: () => handleOpenNLW(),
    adsystem: () => handleOpenAdsys(),
  }

  return (
    <>
    <div className="App bg-neutral-800 w-screen h-screen">
      <div className="App-header bg-red-900 w-screen h-16">
        <Header/>
      </div>
      <div className="App-container m-6 mt-8 w-[3xl] h-[80%] py-1 bg-neutral-600 rounded-2xl">
      <div className="Container flex justify-around">
        <div className="avatar-container w-48 h-48 m-6 rounded-full bg-[url('./assets/avatar.png')] shadow-xl">
          
        </div>
        
        <div className="resume-container m-6 w-[80%] h-48 bg-neutral-800 shadow-xl">
          <div className="changeable-container w-full h-full">
              <div className="flex space-around">
                <div className="text">
                  <h1 className="name ml-4 mt-2 text-white font-ubuntu font-extrabold text-left text-2xl">
                    Carlos Alberto F. S. Junior
                  </h1>
                  <h2 className="academics ml-4 mt-2 font-ubuntu font-extralight text-white text-left text-xl">
                    - Técnico em Informática (IFRJ - 2023);
                    </h2>
                    <h2 className="academics ml-4 font-ubuntu font-extralight text-white text-left text-xl">
                      - Bacharelado em Ciência da Computação (Em andamento);
                    </h2>
                    <h2 className="academics ml-4 font-ubuntu font-extralight text-white text-left text-xl">
                      - Huawei Seeds For The Future Participant (2022);
                    </h2>
                    <h2 className="academics ml-4 font-ubuntu font-extralight text-white text-left text-xl">
                      - 18 anos;
                    </h2>
                </div>
                <div className="Btns flex space-around mt-16 ml-64">
                  <a href="https://behance.net/cafarias">
                    <div className="Btn-behance w-14 h-14 bg-white hover:shadow-sm hover:shadow-white">
                      <box-icon type='logo' name='behance' size={'lg'}></box-icon>
                    </div>
                  </a>
                  <a href="https://github.com/Farias-sys">
                    <div className="Btn-github w-14 h-14 ml-16 bg-white hover:shadow-sm hover:shadow-white">
                      <box-icon type='logo' size={'lg'} name='github'></box-icon>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/cafsjr/">
                    <div className="Btn-linkedin w-14 h-14 ml-16 mr-16 bg-white hover:shadow-sm hover:shadow-white">
                      <box-icon type='logo' size={'lg'} name='linkedin'></box-icon>
                    </div>
                  </a>
                </div>
              </div>
          </div>
        </div>
        </div>
      <div className="Container ml-6 w-[96.7%] h-[55%]">
          <TerminalContextProvider>
            <ReactTerminal welcomeMessage={welcomeMsg} theme={"material-dark"} commands={commands}/>
          </TerminalContextProvider>
      </div>
      </div>
    </div>
    <Modal isOpen={showNLWModal} style={{overlay:{backgroundColor:'rgba(23, 23, 23, 0.7)'}}} onRequestClose={handleCloseNLW} className="absolute w-[30rem] h-96 bg-zinc-700 ml-[32rem] mt-[10rem]">
        <ModalNLW/>
    </Modal>

    <Modal isOpen={showAdsysModal} style={{overlay:{backgroundColor:'rgba(23, 23, 23, 0.7)'}}} onRequestClose={handleCloseAdsys} className="absolute w-[30rem] h-96 bg-zinc-700 ml-[32rem] mt-[10rem]">
        <ModalAdsys/>
    </Modal>
    </>
  );
}

export default App;
