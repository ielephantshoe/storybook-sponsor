import Appbar from './Appbar';
import Button from './Button';
import { Box, Heading, Input, Text, Divider, Image } from 'theme-ui';
import { useState } from 'react';

//------------------------------------------------------------------------------
import GCImage from './stories/assets/gc.png'
import Tile from './Tile';
//------------------------------------------------------------------------------

export default function SampleAdminKeyDates({ data }) {

    const [selected, setSelected] = useState(0);

    const isSelected = (index) => index === selected;


    return (
        <Box>
            <Appbar logo={GCImage}>
                <Box sx={{ display: 'grid', gridAutoFlow: 'row', justifyContent: 'center', gridGap: '2em', marginBlock: '2em', color: 'grey'}}>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width='30' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-home fa-w-18 fa-2x"><path fill="currentColor" d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z" class=""></path></svg>
                        <Text>Home</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width='30' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copyright" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"></path></svg>
                        <Text>Branding</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width='30' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM160 448H48c-8.837 0-16-7.163-16-16v-80h128v96zm0-128H32v-96h128v96zm0-128H32V96h128v96zm160 256H192v-96h128v96zm0-128H192v-96h128v96zm0-128H192V96h128v96zm160 160v80c0 8.837-7.163 16-16 16H352v-96h128zm0-32H352v-96h128v96zm0-128H352V96h128v96z"></path></svg>
                        <Text>Sponsor List</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width="30" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"></path></svg>
                        <Text>Resources</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width="30" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
                        <Text>Account</Text>
                    </Box>
                </Box>
            </Appbar>

            <Box sx={{ overflow: 'hidden', position: 'fixed', zIndex: -2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="3000" height="1000" preserveAspectRatio="none" viewBox="0 0 3000 1000">
                    <g mask="url(&quot;#SvgjsMask1089&quot;)" fill="none">
                        <path d="M2610.15-97.1C2185.69-48.74 1926.29 888.18 1215.8 890.77 505.3 893.36 186.94 455.95-178.56 450.77" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
                        <path d="M1649.95-91.49C1436.1-55.08 1531.45 451.69 989.57 471.37 447.69 491.05 8.55 789.1-331.18 791.37" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
                        <path d="M1739.36-80.89C1455.95 18.2 1567.64 853.2 989.17 856.92 410.7 860.64-123.02 460.33-511.2 456.92" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
                        <path d="M1821.89-137.98C1618.29-106.46 1717.21 356.87 1182.93 382.49 648.64 408.11 242.03 806.78-95 812.49" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
                        <path d="M1986.97-15.7C1781.63-14.28 1808.88 174.2 1189.19 179.83 569.5 185.46 8.07 625.55-406.36 629.83" stroke="rgba(51,121,194,0.58)" stroke-width="2"></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1089">
                            <rect width="3000" height="1000" fill="#ffffff"></rect>
                        </mask>
                    </defs>
                </svg>
            </Box>

            {/* floating add button */}

            <Box as='a' sx={{ position: 'fixed', zIndex: 1, width: '60px', height: '60px', color: 'white', background: '#4e73c2', borderRadius: '50%', boxShadow: '2px 2px 3px #999', bottom: '40px', right: '40px', display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                <svg width='20' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
            </Box>

            <Box sx={{ maxWidth: '1400px', marginInline: 'auto', marginBlock: '2em', padding: ['1em', '2em', '2em'], background:'white' }}>
                <Box sx={{ paddingBlock: '0.5em', borderBottom: '1px solid #f1f3f4' }}>
                    <Box sx={{ display: 'grid', maxWidth: '400px', marginInline: 'auto', gridGap: '2em' }}>
                        <Heading sx={{ textAlign: 'center' }}>Key Dates</Heading>
                        <Box sx={{ justifyItems: 'center', display: 'grid', gridAutoFlow: 'column', color: 'grey' }}>
                            <Text
                                onClick={() => setSelected(0)}
                                sx={{
                                    cursor: 'pointer',
                                    color: `${isSelected(0) ? '#5A77B4' : 'black'}`,
                                    opacity: isSelected(0) ? 1 : 0.5,
                                    fontWeight: `${isSelected(0) ? 700 : 500}`,
                                    position: 'relative',
                                    "::after": {
                                        content: '""',
                                        position: 'absolute',
                                        width: '50%',
                                        height: '1px',
                                        bottom: '-8px',
                                        left: '25%',
                                        borderBottom: `${isSelected(0) ? 2 : 0}px solid #4e73c2`
                                    }
                                }}>All</Text>
                            <Text
                                onClick={() => setSelected(1)}
                                sx={{
                                    cursor: 'pointer',
                                    color: `${isSelected(1) ? '#5A77B4' : 'black'}`,
                                    opacity: isSelected(1) ? 1 : 0.5,
                                    fontWeight: `${isSelected(1) ? 700 : 500}`,
                                    position: 'relative',
                                    "::after": {
                                        content: '""',
                                        position: 'absolute',
                                        width: '50%',
                                        height: '1px',
                                        bottom: '-8px',
                                        left: '25%',
                                        borderBottom: `${isSelected(1) ? 2 : 0}px solid #4e73c2`
                                    }
                                }}>Upcoming</Text>
                            <Text
                                onClick={() => setSelected(2)}
                                sx={{
                                    cursor: 'pointer',
                                    color: `${isSelected(2) ? '#5A77B4' : 'black'}`,
                                    opacity: isSelected(2) ? 1 : 0.5,
                                    fontWeight: `${isSelected(2) ? 700 : 500}`,
                                    position: 'relative',
                                    "::after": {
                                        content: '""',
                                        position: 'absolute',
                                        width: '50%',
                                        height: '1px',
                                        bottom: '-8px',
                                        left: '25%',
                                        borderBottom: `${isSelected(2) ? 2 : 0}px solid #4e73c2`
                                    }
                                }}>Past</Text>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ display: 'grid', gridTemplateColumns: ['1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)'], gridGap: ['20px', '20px', '30px'], marginBlock: '1em' }}>

                    <Tile>
                        <Box sx={{ display: 'grid', height: '117px', gridAutoFlow: 'column', gridTemplateColumns: '27% 67%', marginInline: '0.5em', gridGap: 'min(1em, 3vw)' }}>
                            <Box sx={{ justifySelf: 'end', alignSelf: 'center' }}>
                                <Box sx={{ background: '#F1F5FD', width: '3em', height: '3em', borderRadius: '50%', display: 'grid', flexDirection: 'column', textAlign: 'center', color: '#4e73c2', lineHeight: '1rem', boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)' }}>
                                    <Text sx={{ fontSize: '25.5px', alignSelf: 'end' }}>02</Text>
                                    <Text sx={{ fontSize: '13px' }}>DEC</Text>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', color: 'grey', lineHeight: '1.5em', maxWidth: '18ch' }}>
                                <Heading as='h3'>USA Collage Day dsad</Heading>
                                <Text>1 254 attendees</Text>
                            </Box>
                        </Box>
                        <Divider sx={{ marginInline: '1em', color: 'lightgray', height: '3px', marginTop: '0' }} />
                        <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', height: '60px', paddingInline: '1em', alignItems: 'center' }}>
                            <Image variant='sponsorHead' width={200} src={GCImage} sx={{ objectFit: 'scale-down', cursor: 'pointer', maxHeight: '60px', opacity: 0.6 }} />
                            <Box sx={{ justifySelf: 'end', alignSelf: 'end', marginBottom: '0.5em', gap: '0.5em', display: 'flex' }}>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='17' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"></path></svg>
                                </Box>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='15' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                                </Box>
                            </Box>
                        </Box>
                    </Tile>

                    <Tile>
                        <Box sx={{ display: 'grid', height: '117px', gridAutoFlow: 'column', gridTemplateColumns: '30% 70%', marginInline: '0.5em', gridGap: 'min(1em, 3vw)' }}>
                            <Box sx={{ justifySelf: 'end', alignSelf: 'center' }}>
                                <Box sx={{ background: '#F1F5FD', width: '3em', height: '3em', borderRadius: '50%', display: 'grid', flexDirection: 'column', textAlign: 'center', color: '#5A77B4', lineHeight: '1rem', boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)' }}>
                                    <Text sx={{ fontSize: '25.5px', alignSelf: 'end' }}>02</Text>
                                    <Text sx={{ fontSize: '13px' }}>DEC</Text>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', color: 'grey', lineHeight: '1.5em' }}>
                                <Heading as='h3'>File Upload</Heading>
                                <Text>File Name Here</Text>
                            </Box>
                        </Box>
                        <Divider sx={{ marginInline: '1em', color: 'lightgray', height: '3px', marginTop: '0' }} />
                        <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', height: '60px', paddingInline: '1em', alignItems: 'center' }}>
                            <Image variant='sponsorHead' width={200} src={GCImage} sx={{ objectFit: 'scale-down', cursor: 'pointer', maxHeight: '60px', opacity: 0.6 }} />
                            <Box sx={{ justifySelf: 'end', alignSelf: 'end', marginBottom: '0.5em', gap: '0.5em', display: 'flex' }}>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='17' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"></path></svg>
                                </Box>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='15' aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                                </Box>
                            </Box>
                        </Box>
                    </Tile>

                    <Tile>
                        <Box sx={{ display: 'grid', height: '117px', gridAutoFlow: 'column', gridTemplateColumns: '30% 70%', marginInline: '0.5em', gridGap: 'min(1em, 3vw)' }}>
                            <Box sx={{ justifySelf: 'end', alignSelf: 'center' }}>
                                <Box sx={{ background: '#F1F5FD', width: '3em', height: '3em', borderRadius: '50%', display: 'grid', flexDirection: 'column', textAlign: 'center', color: '#5A77B4', lineHeight: '1rem', boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)' }}>
                                    <Text sx={{ fontSize: '25.5px', alignSelf: 'end' }}>02</Text>
                                    <Text sx={{ fontSize: '13px' }}>DEC</Text>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', color: 'grey', lineHeight: '1.5em' }}>
                                <Heading as='h3'>File Upload</Heading>
                                <Text>File Name Here</Text>
                            </Box>
                        </Box>
                        <Divider sx={{ marginInline: '1em', color: 'lightgray', height: '3px', marginTop: '0' }} />
                        <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', height: '60px', paddingInline: '1em', alignItems: 'center' }}>
                            <Image variant='sponsorHead' width={200} src={GCImage} sx={{ objectFit: 'scale-down', cursor: 'pointer', maxHeight: '60px', opacity: 0.6 }} />
                            <Box sx={{ justifySelf: 'end', alignSelf: 'end', marginBottom: '0.5em', gap: '0.5em', display: 'flex' }}>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='17' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"></path></svg>
                                </Box>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='15' aria-hidden="true" focusable="false" data-prefix="far" data-icon="trash-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                                </Box>
                            </Box>
                        </Box>
                    </Tile>

                    <Tile>
                        <Box sx={{ display: 'grid', height: '117px', gridAutoFlow: 'column', gridTemplateColumns: '27% 67%', marginInline: '0.5em', gridGap: 'min(1em, 3vw)' }}>
                            <Box sx={{ justifySelf: 'end', alignSelf: 'center' }}>
                                <Box sx={{ background: '#F1F5FD', width: '3em', height: '3em', borderRadius: '50%', display: 'grid', flexDirection: 'column', textAlign: 'center', color: '#5A77B4', lineHeight: '1rem', boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)' }}>
                                    <Text sx={{ fontSize: '25.5px', alignSelf: 'end' }}>02</Text>
                                    <Text sx={{ fontSize: '13px' }}>DEC</Text>
                                </Box>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignSelf: 'center', color: 'grey', lineHeight: '1.5em', maxWidth: '18ch' }}>
                                <Heading as='h3'>USA Collage Day dsad</Heading>
                                <Text>1 254 attendees</Text>
                            </Box>
                        </Box>
                        <Divider sx={{ marginInline: '1em', color: 'lightgray', height: '3px', marginTop: '0' }} />
                        <Box sx={{ display: 'grid', gridTemplateColumns: '50% 50%', height: '60px', paddingInline: '1em', alignItems: 'center' }}>
                            <Image variant='sponsorHead' width={200} src={GCImage} sx={{ objectFit: 'scale-down', cursor: 'pointer', maxHeight: '60px', opacity: 0.6 }} />
                            <Box sx={{ justifySelf: 'end', alignSelf: 'end', marginBottom: '0.5em', gap: '0.5em', display: 'flex' }}>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='17' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 0 0 0-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 0 0-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 0 0-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 0 0 0 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0 0 42.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0 0 42.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 0 1-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0 1 87.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"></path></svg>
                                </Box>
                                <Box sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
                                    <svg width='15' aria-hidden="true" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg>
                                </Box>
                            </Box>
                        </Box>
                    </Tile>
                </Box>
            </Box>
        </Box>
    )
}
