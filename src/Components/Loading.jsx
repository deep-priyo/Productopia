
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
    <div className="w-full h-full flex items-center justify-center"><ReactLoading type={type} color={color} height={667} width={375} /></div>

);
export default Loading
