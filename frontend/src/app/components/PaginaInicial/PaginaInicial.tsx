import { UploadImage } from "../UploadImage/UploadImage";
export const PaginaInicial = () => {
  return (
    <>
      <div className="container">
        <hr className="border border-primary border-3 opacity-75"></hr>
        <span className="fw-lighter">
          O DigiRecon tem objetivo de desmistificar a ideia de que inteligência
          artificial é uma tecnologia difícil de entender, especialmente para
          pessoas de fora da área de computação. O projeto explicará, de maneira
          simplificada, o processo de reconhecimento de dígitos utilizando uma
          rede neural, focando em conceitos como a multiplicação de matrizes e o
          treinamento de um modelo de IA. O objetivo é demonstrar de forma
          prática e acessível como a inteligência artificial pode ser aplicada
          no reconhecimento de dígitos.
        </span>
        <hr className="border border-primary border-3 opacity-75"></hr>
        <UploadImage />
      </div>
    </>
  );
};
