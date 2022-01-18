import React from 'react';
import Modal from '../Modal';
import Button from '../Button';
import { Box, Heading, Input, Label, Radio, Select, Textarea } from 'theme-ui';

import GCImage from './assets/gc.png'
import FormElement from '../FormElement';
import Form from '../Form';

export default {
  title: "UI Items/Modal",
  component: Modal,
}

export const AddAsset = () => (
  <Modal>
    <Box sx={{ maxWidth: '1400px', marginInline: 'auto', marginBlock: ['2em'], padding: ['1em', '2em', '2em'], background: 'white' }}>
      <Heading>Add New Asset</Heading>
      <Form onSubmit={data => console.log(data)}>
        <Box sx={{ display: 'grid', gridAutoFlow: ['Row', 'column', 'column'], gridAutoColumns: '1fr', gap: ['0.5em', '1em', '1em'], marginBlock: '1em' }}>
          <Box sx={{ display: 'flex', flexDirection: ['column'], gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
            <FormElement type='text' name='name' label='Asset Name' />
            <FormElement type='text' name='description' label='Description' />
            <FormElement type='date' name='date' label='Submit By' />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: ['column'], gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
            <Select name='type'>
              <option>Image</option>
              <option>Video</option>
              <option>Sound</option>
              <option>Zip</option>
            </Select>
          </Box>
        </Box>
        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  </Modal>
)

export const AddKeyDate = () => (
  <Modal>
    <Box sx={{ maxWidth: '1400px', marginInline: 'auto', marginBlock: ['2em'], padding: ['1em', '2em', '2em'], background: 'white' }}>
      <Heading>Add Key Date</Heading>
      <Form onSubmit={data => console.log(data)}>
        <Box sx={{ display: 'grid', gridAutoFlow: ['Row', 'column', 'column'], gridAutoColumns: '1fr', gap: ['0.5em', '1em', '1em'], marginBlock: '1em' }}>
          <Box sx={{ display: 'flex', flexDirection: ['column'], gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
            <FormElement type='text' name='title' label='Title' />
            <FormElement type='text' name='subtitle' label='Subtitle' />
            <FormElement type='date' name='date' label='Date' />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', paddingBlock: ['0.5em', '1em', '1em'], gap: ['0.5em', '1em', '1em']  }}>
            <Label htmlFor='description'>Description</Label>
            <Textarea id='description' name={'description'} sx={{height: '100%'}}/>
          </Box>
        </Box>
        <Button type="submit">Submit</Button>
      </Form>
    </Box>
  </Modal>
)
