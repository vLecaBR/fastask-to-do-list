// components/Sidebar/index.jsx
import React, { useState } from 'react';
import { SidebarContainer, List, ListItem } from './Sidebar.styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';

function Sidebar({ sections, setCurrentSection, addSection, removeSection }) {
  const [newSection, setNewSection] = useState('');

  const handleAddSection = () => {
    if (newSection.trim()) {
      addSection(newSection.trim());
      setNewSection('');
    }
  };

  return (
    <SidebarContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          borderBottom: '1px solid #ddd',
        }}
      >
        <TextField
          placeholder="Nova seção"
          value={newSection}
          onChange={(e) => setNewSection(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            flex: 1,
            marginRight: '10px',
            backgroundColor: '#ffffff',
            borderRadius: '5px',
          }}
        />
        <IconButton
          onClick={handleAddSection}
          color="primary"
          size="small"
          sx={{
            backgroundColor: '#007bff',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: '#0056b3',
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <List>
        {sections.map(section => (
          <ListItem
            key={section}
            onClick={() => setCurrentSection(section)}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '8px 10px',
              '&:hover': { backgroundColor: '#f0f0f0' },
            }}
          >
            <span>{section}</span>
            {section !== 'Hoje' && section !== 'Lixeira' && section !== 'Completas' && (
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  removeSection(section);
                }}
                sx={{
                  marginLeft: 'auto',
                  color: '#007bff',
                  '&:hover': { color: '#0056b3' },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            )}
          </ListItem>
        ))}
      </List>
    </SidebarContainer>
  );
}

export default Sidebar;