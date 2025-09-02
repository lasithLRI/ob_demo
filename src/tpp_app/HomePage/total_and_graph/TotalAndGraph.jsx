import GraphSection from './graph_section/GraphSection';
import TotalSection from './total_section/TotalSection';
import './TotalAndGraph.css';

const TotalAndGraph = () => {
    return (
        <div className="total_and_graph_outer">
            <TotalSection/>
            <GraphSection/>
        </div>
    );
}

export default TotalAndGraph;
