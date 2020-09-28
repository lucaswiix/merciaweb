import React, { useState } from 'react';
import Modal from 'antd/lib/modal/Modal';


export interface IArtists {
  name: string;
  activity: string;
  image: string;
  description: string;
}
const ArtistasPage: React.FC = () => {


  const artists: IArtists[] = [
    {
      name: 'Mércia Rocha Herdle',
      activity: 'Proponente/Produtora',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',
      description: 'Nasceu em Recife/PE, Produtora Cultural do início dos anos 90, já tendo realizado, participado de vários projetos culturais em Pernambuco como também fora do País, participação em órgão governamental e municipal produzindo a cultura para a cidade e Estado de PE. Participativa em vários segmentos culturais.'
    },
    {
      name: 'Maurício Silva',
      activity: 'Artista/Curador',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',
      description: 'Nasceu em Recife/PE. Realiza a partir de 1979, pinturas, gravuras, desenhos e escultura, utilizando um vocabulário plástico muito diversificado. Nos anos 80 esteve a frente de vários movimentos importantes das artes plásticas de seu estado, passando a incorporar ao seu repertório a partir dos anos 90 a realização de vídeos, instalações, performances e fotografias. Hoje vive e trabalha na cidade de Meudon, na França.'
    },
    {
      name: 'Juliana Notari',
      description: 'Artista, doutoranda e mestre em Artes Visuais pelo PPGARTES/UERJ, é graduada em Artes Visuais pela UFPE (2003). Nos últimos seis anos vive e trabalha em Belém/PA, Rio de Janeiro/RJ e Recife/PE. Trabalha com as mais diversas linguagens (instalações, performances, fotografias, desenhos, objetos e vídeos) com abordagem multidisciplinar. Participou de exposições nacionais e internacionais, recebeu prêmios, realizou residências artísticas e possui trabalhos em coleções públicas e privadas.',
      activity: 'Artista/Curadora',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',
    },
    {
      name: 'Fernando Duarte',
      description: 'Artista visual e gestor cultural. Natural de Floriano/PI, reside em Recife/PE desde o ano de 1966. Formado em Engenharia Civil pela Universidade Federal de Pernambuco, dedica-se à pintura desde 1975, tendo sido premiado no Salão das Artes da ETEPAM (Recife-PE) em1988, e no IV Salão de Artes de João Pessoa (PB) em 1989.',
      activity: 'Artista/Curador',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',
    },
    {
      name: 'Rinaldo Silva',
      description: 'Artista visual e professor de Arte. Começou a pintar aos 13 anos e, com 19, ganhou o prêmio de artista mais promissor de Pernambuco do Salão de Artes do Museu do Estado. Na sua carreira, conta 13 exposições individuais e 24 coletivas. Consagrado pela crítica nacional, já levou seus trabalhos para países como Itália, França, México, Estados Unidos e Equador.',
      activity: 'Artista/Curador',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',

    },
    {
      name: 'Isabela Stampanoni',
      description: 'Artista visual, vem desenvolvendo trabalhos em diferentes linguagens e suportes, como desenho, gravura, pintura, fotografia, performance e vídeos. Atua também como diretora de arte e editora de vídeo, este último, principalmente colaborando com artistas. Estudou Artes Plásticas pela Universidade Federal de Pernambuco e Filmmaker pela Scuola Civic adi Cinema, Televisione e Nuovi Media di Milano/Italia. Frequentou e trabalhou na Stamperia di Giorgio Upiglio de Gravuras Milão, Itália (1999).',
      activity: 'Artista/Curadora',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',

    },
    {
      name: 'Mariano Néto',
      description: 'Artista visual e professor, vive trabalha na França. Possui graduação em Educação Artística na Universidade Federal de Pernambuco, e bacharelado, metrado e doutorado em Artes Plásticas pela Universidade de Paris I Panthéon Sorbonne. Dedica-se à docência, à pesquisa e à produção de pinturas, além de prestar consultoria em Artes Plásticas.',
      activity: 'Artista/Curador',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',

    },
    {
      name: 'Soraya Fonseca',
      description: `Desde 1999 desenvolve trabalhos em artes plásticas, cênicas e visuais.

      Desenho, gravura, instalação, escultura cerâmica, performances, cenário, figurino e direção, fazem parte de seu currículo como artista. Grupos artísticos A Firma da Irmã de Irma e Gráfica Lenta fazem parte deste percurso.
      
      Tem participado também de projetos como arte-educadora, intérprete de língua de sinais e psicóloga. Desde 2013 se divide entre as cidades de Recife e Marselha-FR.`,
      activity: 'Artista/Curadora',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',

    },
    {
      name: 'Josias Scharf',
      description: `Artista visual e professor de Arte pernambucano, vive e trabalha em Berlim.  Atua no Atelierprogramm der Berufsverband Bildender Künstler (BBK e no Machtmit! Kindermuseum, em Berlim. Participou de numerosas exposições individuais e coletivas no Brasil, Berlim, Copenhague, Holanda, Senegal e Paris e é representado por galerias em Berlim, Paris e Recife.`,
      activity: 'Artista/Curador',
      image: 'https://www.itaucultural.org.br//conscienciacibernetica/2019/assets/images/artistas/rejane-cantoni.jpg',

    },
  ];

  const [openArtistDetailModal, setOpenArtistDetailModal] = useState(false);
  const [artistDetail, setArtistDetail] = useState({
    name: '',
    detail: ''
  });

  return (
    <div className="list-secondary ">
      <div className="list-secondary--content">
        <div className="list-secondary--section">
          <h1 className="list-secondary--title">Artistas</h1>
        </div>
        <div className="list-secondary--articles">

          {artists.map((artist, index) => (

            <a key={index.toString()} className="list-secondary--card no-decoration" onClick={() => openArtistModal(artist)}>
              <div className="list-secondary--card-media-wrapper">
                <div className="list-secondary--card-media-content">
                  <img className="list-secondary--card-image" src={artist.image} alt="" />
                </div>
              </div>
              <div className="list-secondary--card-info" style={{ borderColor: 'rgba(0, 0, 0, 0.3)' }}>
                <div className="list-secondary--card-info_top">
                  <h4 className="list-secondary--card-info--title">{artist.name}</h4>
                  <p className="list-secondary--card-info--subtitle">{artist.activity}</p>
                  <div className="list-secondary--card-info--btn">
                    <button className="call-to-action--btn call-to-action--btn_square" type="button" name="button">
                      <span className="before"></span>
								+
								<span className="after"></span>
                    </button>
                  </div>
                </div>
              </div>
            </a>
          ))}
          <Modal
            title={artistDetail?.name}
            visible={openArtistDetailModal}
            onCancel={() => setOpenArtistDetailModal(false)}
            footer={false}
          >
            {artistDetail?.detail}
          </Modal>
        </div>
      </div>
    </div>

  );

  function openArtistModal(artist: IArtists) {
    setArtistDetail({
      name: artist.name,
      detail: artist.description
    });
    setOpenArtistDetailModal(true);
  }
}

export default ArtistasPage;