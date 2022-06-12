import '../../bootstrap.css';
import '../../back.scss';
import BackContext from '../../Contexts/BackContext';
function Back() {
  return (
    <BackContext.Provider value={{}}>

    <h1>
        Back
    </h1>

    </BackContext.Provider>
  );
}

export default Back;
