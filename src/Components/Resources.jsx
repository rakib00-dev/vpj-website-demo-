import Examples from './Examples';

const Resources = () => {
  return (
    <Examples title="Resources" md="grid-cols-3">
      {/* cards */}
      <ResourcesCard />
      <ResourcesCard />
      <ResourcesCard />
    </Examples>
  );
};

export default Resources;

const ResourcesCard = () => {
  return <div>card</div>;
};
