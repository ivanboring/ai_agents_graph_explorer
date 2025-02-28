import React, { useState, useEffect } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
} from '@xyflow/react';
import StepEdge from './edges/StepEdge';
import AgentNode from './nodes/AgentNode';
import './tailwind-config.js';

import '@xyflow/react/dist/style.css';

const edgeTypes = {
  step: StepEdge,
};

export default function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  useEffect(() => {
    async function fetchConfig() {
      try {
        const response = await fetch('https://minikanban.ddev.site/admin/api/agents_graph_explorer/get_agents');
        const configData = await response.json();

        // Dynamically create nodes based on the fetched data
        const updatedNodes = [
          {
            id: '1',
            position: { x: 500, y: 300 },
            data: {
              agents: configData.data || [],
            },
            type: 'agentNode',
          },
          {
            id: '2',
            position: { x: 600, y: 500 },
            data: { label: 'Test' },
          },
          {
            id: '3',
            position: { x: 400, y: 500 },
            data: { label: 'World' },
          }
        ];

        const updatedEdges = [
          { id: 'e1-2', source: '1', target: '2' },
          { id: 'e1-3', source: '1', target: '3' }
        ];

        setNodes(updatedNodes);
        setEdges(updatedEdges);
      } catch (error) {
        console.error('Error fetching config:', error);
      }
    }

    fetchConfig();
  }, []);

  const nodeTypes = {
    agentNode: AgentNode,
  };

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={10} size={1} />
      </ReactFlow>
    </div>
  );
}
