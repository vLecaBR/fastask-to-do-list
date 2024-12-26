import React, { useState, useEffect } from 'react';
import { SidebarContainer, List, ListItem } from './Sidebar.styles';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles'; // Hook do MUI para acessar o tema

function Sidebar({ sections, setCurrentSection, addSection, removeSection }) {
  const [newSection, setNewSection] = useState('');
  const [activeSection, setActiveSection] = useState('');

  const muiTheme = useTheme(); // Obtenha o tema do MUI

  useEffect(() => {
    const savedSection = localStorage.getItem('activeSection');
    if (savedSection) {
      setActiveSection(savedSection);
      setCurrentSection(savedSection);
    }
  }, [setCurrentSection]);

  const handleAddSection = () => {
    if (newSection.trim()) {
      addSection(newSection.trim());
      setNewSection('');
    }
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setCurrentSection(section);
    localStorage.setItem('activeSection', section);
  };

  return (
    <SidebarContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px',
          borderBottom: `1px solid ${muiTheme.palette.divider}`,
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
            backgroundColor: muiTheme.palette.background.default,
            borderRadius: '5px',
          }}
        />
        <IconButton
          onClick={handleAddSection}
          size="small"
          sx={{
            backgroundColor: muiTheme.palette.primary.main,
            color: muiTheme.palette.common.white,
            '&:hover': {
              backgroundColor: muiTheme.palette.primary.dark,
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Box>
      <List>
        {sections.map((section) => (
          <ListItem
            key={section}
            onClick={() => handleSectionClick(section)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '8px 10px',
              borderRadius: '8px',
              backgroundColor: activeSection === section ? muiTheme.palette.action.hover : muiTheme.palette.background.paper,
              color: activeSection === section ? muiTheme.palette.primary.main : muiTheme.palette.text.primary,
            }}
          >
            <span>{section}</span>
            {section !== 'Hoje' &&
              section !== 'Lixeira' &&
              section !== 'Completas' &&
              section !== 'Próximos 7 dias' && (
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeSection(section);
                  }}
                  sx={{
                    marginLeft: 'auto',
                    color: muiTheme.palette.primary.main,
                    '&:hover': { color: muiTheme.palette.primary.dark },
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
