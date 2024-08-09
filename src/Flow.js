import React from 'react';
import { ReactFlow, ReactFlowProvider, Background, Handle, MarkerType, MiniMap, NodePosition } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

/*deploy with react flow theming but construct styles to personalize*/

/* add sourcePosition right to make handle display only on right side of initial node,
set type to input to remove add'l handles as initial node is output only*/

const initialNodes = [
  /*construct first set of nodes for initial node source and first branch*/
  { id: '1', sourcePosition: 'right', type: 'input', position: { x: 20, y: 250 }, data: { label: 'Skills' } },
  { id: '2', sourcePosition: 'right', targetPosition: 'left', position: { x: 250, y: 150 }, data: { label: 'Business' } },
  { id: '3', sourcePosition: 'right', targetPosition: 'left', position: { x: 250, y: 250 }, data: { label: 'Tech' } },
  { id: '4', sourcePosition: 'right', targetPosition: 'left', position: { x: 250, y: 350 }, data: { label: 'Customer Success' } },
  /*construct second set of nodes for second branch: business  -- extending from first branch*/
  { id: '2.1', sourcePosition: 'right', targetPosition: 'left', position: { x: 500, y: 50  }, data: { label: 'Process Development; Research & Analysis; Data Visualization & Analysis; Change Management; Presentation; Customer Retention; Organization; Business-to-Business Support; Salesforce & Zendesk (CRM); Client Support'} },
    /*construct second set of nodes for second branch: tech grouping -- extending from first branch*/
  { id: '3.1', sourcePosition: 'right', targetPosition: 'left', position: { x: 950, y: 125 }, data: { label: 'Development'} },
  { id: '3.2', sourcePosition: 'right', targetPosition: 'left', position: { x: 950, y: 200}, data: { label: 'Software & SaaS'} },
  { id: '3.3', sourcePosition: 'right', targetPosition: 'left', position: { x: 950, y: 275}, data: { label: 'Operations'} },
  { id: '3.4', sourcePosition: 'right', targetPosition: 'left', position: { x: 950, y: 350}, data: { label: 'IT & Telecom'} },
    /*construct second set of nodes for second branch: customer success -- extending from first branch*/
  { id: '4.1', sourcePosition: 'right', targetPosition: 'left', position: { x: 500, y: 450}, data: { label: 'Ticket Management; Direct Customer Support; Email Support; Web Conference/Video Support; Office 365; Research; Subject Matter Expertise; SLA Compliance'} },
  /*construct third set of nodes for third branch: dev., software, operations, hardware -- extending from second branch*/
  { id: '3.1.1', sourcePosition: 'right', targetPosition: 'left', position: { x: 1350, y: -75}, data: { label: 'Linux; Windows; React; ReactFlow; Charting & Data Visualization (ReCharts, GoogleChart, Nivo, visx, Victory Charts ); GitHub CLI; HTML; CSS; Python; Scripting; Project Management; Microsoft Azure; Wordpress Development' } },
  { id: '3.2.1', sourcePosition: 'right', targetPosition: 'left', position: { x: 1350, y: 125}, data: { label: 'Ticket Management; Root Cause Analysis; Email Support; Remote Field Technician Support; Jira, Salesforce & Zendesk; New User Account Setup; Password Management; Web Conference/Video Support; Office 365; Research; Subject Matter Expertise; SLA Compliance' } },
  { id: '3.3.1', sourcePosition: 'right', targetPosition: 'left', position: { x: 1350, y: 350}, data: { label: 'User Access Control; Hosting; DNS Management; VMWare & Citrix (Remote Client Server Management); Microsoft SQL Server 16/17/19; Database Management; Database Updates' } },
  { id: '3.4.1', sourcePosition: 'right', targetPosition: 'left', position: { x: 1350, y: 510}, data: { label: 'WAN & LAN Analysis & Troubleshooting; Electrical Engineering Concepts; IP Management; OS Setup & Installation; CRM Management; Remote User Assistance (Windows, Chrome Remote Desktop); System Restore; New User Configuration (IT); Cabling & Cable Repair; Low Voltage Wiring; VoIP Setup & Troubleshooting; A/V Setup & Troubleshooting' } },

];

{/*use edges to connect nodes by source & target; for ex., source 1 connects node 1 to target node 2*/}
/*render first branch of map from 'skills' source node*/
const initialEdges = [{ id: '1->2', source: '1', target: '2', animated: true },
                      { id: '1->3', source: '1', target: '3', animated: true },
                      { id: '1->4', source: '1', target: '4', animated: true },
                      /* render second branch of map: business*/
                      { id: '2->2.1', source: '2', target: '2.1', animated: true },
                      /*render second branch of map: tech*/
                      { id: '3->3.1', source: '3', target: '3.1', animated: true },
                      { id: '3->3.2', source: '3', target: '3.2', animated: true },
                      { id: '3->3.3', source: '3', target: '3.3', animated: true },
                      { id: '3->3.4', source: '3', target: '3.4', animated: true },
                      /*render second branch of map: customer success*/
                      { id: '4->4.1', source: '4', target: '4.1', animated: true },
                      /*render third branch of map: tech-expanded*/
                      { id: '3.1->3.1.1', source: '3.1', target: '3.1.1', animated: true },
                      { id: '3.2->3.2.1', source: '3.2', target: '3.2.1', animated: true },
                      { id: '3.3->3.3.1', source: '3.3', target: '3.3.1', animated: true },
                      { id: '3.4->3.4.1', source: '3.4', target: '3.4.1', animated: true }
];
export default function App() {
  return (
    <ReactFlowProvider>
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
      <Background />
    </div>
    </ReactFlowProvider>
  );
}
