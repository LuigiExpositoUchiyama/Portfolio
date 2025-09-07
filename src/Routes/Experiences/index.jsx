import React from 'react';
import ExperienceItem from '../../Components/ExperienceItem';
import geral from '../../App.module.css';
import styles from './Experience.module.css';

/* Imagens */
import TeleperformanceImg from '/logos/Teleperformance.png';
import ThiagoPessoaJoiasImg from '/logos/ThiagoPessoaJoias.png';
import VAImg from '../../Assets/VA.svg';

const Experiences = () => {
  const experiencesData = [
    {
      imgSrc: ThiagoPessoaJoiasImg,
      altText: 'Thiago Pessoa Joias',
      role: 'Freelancer',
      period: 'Nov/24 - Agora',
      details: [
        {
          title: '- Gerenciamento do Site em WordPress',
          description:
            ' Sou responsável por gerenciar e manter o site Thiago Pessoa, garantindo que todas as informações estejam organizadas e atualizadas.',
        },
        {
          title: '- Atualização de Banners e Produtos',
          description:
            ' Realizo a substituição de banners, além de adicionar e atualizar produtos no site de forma precisa, proporcionando uma experiência visual atrativa e informativa para os visitantes.',
        },
        {
          title: '- Criação de Novo Layout',
          description:
            ' Desenvolvo e implemento um novo layout para o site, focando em melhorias visuais e de usabilidade. Isso garante um design moderno e alinhado com as necessidades da plataforma e dos usuários.',
        },
        {
          title: '- Ajustes e Manutenção Regular',
          description:
            ' Cuido das atualizações técnicas e de conteúdo no WordPress, assegurando que o site esteja sempre funcionando corretamente, sem falhas e alinhado com as melhores práticas do mercado.',
        },
      ],
    },
    {
      imgSrc: VAImg,
      altText: 'VA Group',
      role: 'Desenvolvedor Junior',
      period: 'Ago/24 - Out/24',
      details: [
        {
          title: '- Colaboração em projetos',
          description:
            ' Colaborei diretamente com Virgínia Arruda, uma figura pública influente, em projetos estratégicos que fortalecem sua marca e ampliam seu impacto.',
        },
        {
          title: '- Site com API do YouTube Analytics',
          description:
            ' Criei uma integração para facilitar a visualização e gestão dos dados de todos os canais.',
        },
        {
          title: '- Promovi conteúdos no YouTube',
          description:
            ' Utilizei o Google Ads para aumentar inscritos e visualizações, otimizando campanhas para gerar maior engajamento e crescimento de audiência.',
        },
        {
          title: '- Criação de aplicativo com React Native',
          description:
            ' Contribuí com ideias para o desenvolvimento de um aplicativo com conteúdos exclusivos da Virgínia Arruda.',
        },
        {
          title: '- Garantia da Satisfação do Cliente',
          description:
            ' Trabalho para assegurar a satisfação do cliente, ouvindo suas preocupações e tomando medidas adequadas para resolver seus problemas.',
        },
        {
          title: '- Gerenciamento de Tarefas',
          description: ' Gerenciei todas as minhas tarefas no sistema Trello.',
        },
      ],
    },
    {
      imgSrc: TeleperformanceImg,
      altText: 'Teleperformance',
      role: 'Jovem Aprendiz',
      period: 'Março/23 - Abril/24',
      details: [
        {
          title: '- Atendimento ao Cliente via Chat Genesys Cloud',
          description:
            ' Sou responsável por oferecer atendimento ao cliente por meio do sistema Genesys Cloud, garantindo uma experiência positiva.',
        },
        {
          title: '- Integração com Chatbot Watson',
          description:
            ' No primeiro contato, o cliente interage com o chatbot Watson, que coleta informações iniciais. Assim que necessário, o chat é direcionado para mim para atendimento personalizado.',
        },
        {
          title: '- Registro de Interações',
          description:
            ' Registro todas as interações com os clientes de forma precisa e detalhada no sistema Oracle Service Cloud. Isso ajuda a manter um histórico completo das conversas, facilitando a comunicação com outros departamentos responsáveis.',
        },
        {
          title: '- Identificação das Necessidades do Cliente',
          description:
            ' Minha função principal é identificar as necessidades individuais de cada cliente e oferecer soluções rápidas e eficazes.',
        },
        {
          title: '- Garantia da Satisfação do Cliente',
          description:
            ' Trabalho para assegurar a satisfação do cliente, ouvindo suas preocupações e tomando medidas adequadas para resolver seus problemas.',
        },
        {
          title: '- Contribuição para o Sucesso da Empresa',
          description:
            ' Meu papel é fundamental para garantir a satisfação do cliente e contribuir para o sucesso global da empresa, mantendo altos padrões de atendimento e comunicação eficaz.',
        },
      ],
    },
    {
      imgSrc: ThiagoPessoaJoiasImg,
      altText: 'Thiago Pessoa Joias',
      role: 'Freelancer',
      period: 'Ago/22 - Jan/23',
      details: [
        {
          title: '- Atendimento Receptivo Multicanal',
          description:
            ' Sou responsável pelo atendimento receptivo em diversos canais, incluindo WhatsApp, Instagram e atendimento presencial. Isso permite que a empresa esteja acessível aos clientes em diferentes plataformas.',
        },
        {
          title: '- Agendamento e Organização de Tarefas',
          description:
            ' Desempenho um papel fundamental no agendamento de reuniões e na organização das tarefas diárias. Isso contribui para a eficiência operacional e para o cumprimento de prazos importantes.',
        },
        {
          title: '- Controle no Sistema Conta Azul e Trello',
          description:
            ' Realizo o controle e gerenciamento das informações financeiras e de tarefas no sistema Conta Azul e no Trello, garantindo a precisão e organização dos dados.',
        },
        {
          title: '- Elaboração de Orçamentos e Cobrança',
          description:
            ' Sou responsável pela criação de orçamentos para os clientes, bem como pelo acompanhamento e cobrança desses orçamentos. Isso ajuda a manter as finanças da empresa em ordem.',
        },
        {
          title: '- Suporte no Desenvolvimento do Site Interno',
          description:
            ' Contribuo ativamente no processo de criação e desenvolvimento do site interno da empresa, oferecendo ideias e sugestões para melhorar seu desempenho e usabilidade. Isso garante uma presença online eficaz.',
        },
        {
          title: '- Meu Papel na Empresa',
          description:
            ' Desempenho um papel crucial no suporte às operações diárias da empresa, desde o atendimento ao cliente até a organização interna e o desenvolvimento online. Minhas tarefas são essenciais para o sucesso e eficiência geral da empresa.',
        },
      ],
    },
  ];

  return (
    <section className={styles.experienceContainer}>
      <header className={styles.sectionHeader}>
        <h1 className="title">Experiências</h1>
      </header>

      <div className={styles.experienceList}>
        {experiencesData.map((exp, index) => (
          <ExperienceItem
            key={index}
            imgSrc={exp.imgSrc}
            altText={exp.altText}
            role={exp.role}
            period={exp.period}
            details={exp.details}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
