import Examples from './Examples';

const Resources = () => {
  return (
    <Examples title="Resources" md="md:grid-cols-3">
      {/* cards */}
      <ResourcesCard />
      <ResourcesCard title="How To Build Your Own Stock Index" />
      <ResourcesCard title="Thematic Now Powers Asset Management Products, Launches Institutional AI Investment Product" />
    </Examples>
  );
};

export default Resources;

const ResourcesCard = ({
  title = 'How to get started on the Thematic research platform',
  src = '../images/resources/img-1.png',
}) => {
  return (
    <a href="" className="group">
      <div className="p-5 h-80 bg-gray-100 border border-gray-400 rounded-2xl group-hover:text-blue-400">
        <div className="h-1/2 overflow-hidden w-full">
          <img src={src} alt="" loading="lazy" />
        </div>
        <h1 className="line-clamp-3 text-lg mt-8 font-bold">{title}</h1>
      </div>
    </a>
  );
};
