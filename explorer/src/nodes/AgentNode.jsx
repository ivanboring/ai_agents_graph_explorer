import { useCallback } from 'react';
import { Handle, Position } from '@xyflow/react';

const handleStyle = { left: 10 };

function AgentNode({ data, isConnectable }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);

  return (
    <div className="agent-node node px-8 py-8 shadow-md rounded-md bg-white border-2 border-stone-400">
      <div>
        <label htmlFor="select">Select Agent:</label><br />
        <select id="select" name="select" onChange={onChange} className="nodrag">
          {data.agents && data.agents.length > 0 ? (
            data.agents.map((agent) => (
              <option key={agent.id} value={agent.id}>
                {agent.name}
              </option>
            ))

          ) : (
            <option value="">No options available</option>
          )}
        </select><br />
        <label htmlFor="text">Instructions:</label><br />
        <textarea rows="10" id="text" name="text" onChange={onChange} className="nodrag px-1 py-1 shadow-md border-2" />
        <input type="button" className="nodrag bg-teal-500" value="Start the agent" />
      </div>
      <Handle type="source" position={Position.Bottom} id="a" className="w-16 !bg-teal-500" />
    </div>
  );
}

export default AgentNode;
