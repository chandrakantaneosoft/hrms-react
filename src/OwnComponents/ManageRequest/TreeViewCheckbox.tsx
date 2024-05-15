import React, { useState, forwardRef, ChangeEvent } from 'react'
import { Accordion, AccordionSummary, Typography, Grid, Collapse, Checkbox, Box } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView'
import { TreeItem, TreeItemProps } from '@mui/x-tree-view/TreeItem'
import { useSpring, animated } from '@react-spring/web'

function TransitionComponent(props: TransitionProps) {
  const style = useSpring({
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`
    }
  })

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  )
}

const CustomTreeItem = React.forwardRef((props: TreeItemProps, ref: React.Ref<HTMLLIElement>) => (
  <TreeItem {...props} slots={{ groupTransition: TransitionComponent, ...props.slots }} ref={ref} />
))

CustomTreeItem.displayName = 'CustomTreeItem'

// checkbox
interface TreeNode {
  id: string
  label: string
  children?: TreeNode[]
}

const treeData: TreeNode[] = [
  {
    id: '1',
    label: 'Academic',
    children: [
      {
        id: '2',
        label: 'Timetable',
        children: [
          {
            id: '5',
            label: 'Sub Sub Module',
            children: [
              { id: '9', label: 'Create' },
              { id: '10', label: 'Update' },
              { id: '11', label: 'Delete' },
              { id: '12', label: 'Demo1' },
              { id: '13', label: 'Demo2' }
            ]
          }
        ]
      },
      {
        id: '3',
        label: 'Division Allocation',
        children: [
          {
            id: '6',
            label: 'Sub Sub Module',
            children: [
              { id: '15', label: 'Create' },
              { id: '16', label: 'Update' },
              { id: '17', label: 'Delete' },
              { id: '18', label: 'Demo1' },
              { id: '19', label: 'Demo2' }
            ]
          }
        ]
      },
      {
        id: '4',
        label: 'House Allocation',
        children: [
          {
            id: '7',
            label: 'Sub Sub Module',
            children: [
              { id: '21', label: 'Create' },
              { id: '22', label: 'Update' },
              { id: '23', label: 'Delete' },
              { id: '24', label: 'Demo1' },
              { id: '25', label: 'Demo2' }
            ]
          }
        ]
      }
    ]
  }
]

export default function TreeViewCheckbox() {
  // const [expanded, setExpanded] = useState(false);
  // const handleChange =
  //   (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
  //     setExpanded(isExpanded ? panel : false);
  //   };

  const [expanded, setExpanded] = React.useState<string | false>('panel1')
  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false)
  }

  // State to manage the checkboxes
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({})

  // Function to handle checkbox change
  // const handleCheckboxChange = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   nodeId: string
  // ) => {
  //   const { checked } = event.target;
  //   setChecked((prev) => ({
  //     ...prev,
  //     [nodeId]: checked,
  //   }));
  // };

  // Function to handle checkbox change
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, nodeId: string) => {
    const { checked } = event.target
    const updatedCheckedState: { [key: string]: boolean } = {}

    // Function to recursively update the checked state of all children nodes
    const updateChildrenCheckedState = (nodes: TreeNode[]) => {
      nodes.forEach(node => {
        updatedCheckedState[node.id] = checked
        if (node.children) {
          updateChildrenCheckedState(node.children)
        }
      })
    }

    // Find the node in the tree data
    const node = findNodeById(treeData, nodeId)

    // Update the checked state of the clicked node
    updatedCheckedState[nodeId] = checked

    // If the clicked node has children, update the checked state of all its children nodes
    if (node && node.children) {
      updateChildrenCheckedState(node.children)
    }

    // Update the checked state
    setChecked(prev => ({
      ...prev,
      ...updatedCheckedState
    }))
  }

  // Function to find a node by its id in the tree data
  const findNodeById = (nodes: TreeNode[], nodeId: string): TreeNode | undefined => {
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].id === nodeId) {
        return nodes[i]
      } else if (nodes[i].children) {
        const foundNode = findNodeById(nodes[i].children!, nodeId)
        if (foundNode) {
          return foundNode
        }
      }
    }

    return undefined
  }

  const renderTree = (nodes: TreeNode[]) =>
    nodes.map(node => (
      <CustomTreeItem
        key={node.id}
        itemId={node.id}
        className='label'
        label={
          <Box display='flex' alignItems='center'>
            <Checkbox
              color={!checked[node.id] ? 'default' : 'primary'}
              checked={!!checked[node.id]}
              onChange={event => handleCheckboxChange(event, node.id)}
              indeterminate={node.children ? node.children.some(child => !!checked[child.id]) : false}
            />
            <Typography
              style={{
                fontSize: '14px',
                fontWeight: checked[node.id] ? '600' : '400',
                color: '#1B1B1B'
              }}
            >
              {node.label}
            </Typography>
          </Box>
        }
      >
        {node.children && renderTree(node.children)}
      </CustomTreeItem>
    ))

  return (
    <>
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Accordion
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')}
                className='tree-vcard'
                sx={{ boxShadow: 'none' }}
              >
                <AccordionSummary aria-controls='panel1bh-content' id='panel1bh-header'>
                  <SimpleTreeView
                    aria-label='customized'
                    defaultExpandedItems={['1']}
                    sx={{
                      overflowX: 'hidden',
                      flexGrow: 1,
                      maxWidth: 300
                    }}
                    className='header-dropdown'
                  >
                    {renderTree(treeData)}
                  </SimpleTreeView>
                </AccordionSummary>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Accordion
                expanded={expanded === 'panel5'}
                onChange={handleChange('panel5')}
                className='tree-vcard'
                sx={{ boxShadow: 'none' }}
              >
                <AccordionSummary aria-controls='panel5bh-content' id='panel5bh-header'>
                  <SimpleTreeView
                    aria-label='customized'
                    sx={{
                      overflowX: 'hidden',
                      flexGrow: 1,
                      maxWidth: 300
                    }}
                    className='header-dropdown'
                  >
                    {renderTree(treeData)}
                  </SimpleTreeView>
                </AccordionSummary>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Accordion
                expanded={expanded === 'panel9'}
                onChange={handleChange('panel9')}
                className='tree-vcard'
                sx={{ boxShadow: 'none' }}
              >
                <AccordionSummary aria-controls='panel9bh-content' id='panel9bh-header'>
                  <SimpleTreeView
                    aria-label='customized'
                    sx={{
                      overflowX: 'hidden',
                      flexGrow: 1,
                      maxWidth: 300
                    }}
                    className='header-dropdown'
                  >
                    {renderTree(treeData)}
                  </SimpleTreeView>
                </AccordionSummary>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={3}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <Accordion
                expanded={expanded === 'panel13'}
                onChange={handleChange('panel13')}
                className='tree-vcard'
                sx={{ boxShadow: 'none' }}
              >
                <AccordionSummary aria-controls='panel13bh-content' id='panel13bh-header'>
                  <SimpleTreeView
                    aria-label='customized'
                    sx={{
                      overflowX: 'hidden',
                      flexGrow: 1,
                      maxWidth: 300
                    }}
                    className='header-dropdown'
                  >
                    {renderTree(treeData)}
                  </SimpleTreeView>
                </AccordionSummary>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
