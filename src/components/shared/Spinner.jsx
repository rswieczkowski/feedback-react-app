import spinner from '../assets/PVtR.gif';
function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt='Loading...'
        style={{ width: '100px', margin: 'auto', dispaly: 'block' }}
      />
    </div>
  );
}

export default Spinner;
