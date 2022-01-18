import Appbar from './Appbar';
import Button from './Button';
import { Box, Divider, Heading, Image, Input, Text } from 'theme-ui';
import { useState } from 'react';

//------------------------------------------------------------------------------
import GCImage from './stories/assets/gc.png'
import GCImage2 from './stories/assets/gc-dash.png'
//------------------------------------------------------------------------------

export default function SampleSponsorContact({ data }) {
    return (
        <Box>
            <Appbar logo={GCImage}>
                <Box sx={{ display: 'grid', gridAutoFlow: 'row', justifyContent: 'center', gridGap: '2em', marginBlock: '2em', color: 'grey' }}>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width='30' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-home fa-w-18 fa-2x"><path fill="currentColor" d="M541 229.16l-61-49.83v-77.4a6 6 0 0 0-6-6h-20a6 6 0 0 0-6 6v51.33L308.19 39.14a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z" class=""></path></svg>
                        <Text>Home</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width='30' aria-hidden="true" focusable="false" data-prefix="fal" data-icon="table" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM160 448H48c-8.837 0-16-7.163-16-16v-80h128v96zm0-128H32v-96h128v96zm0-128H32V96h128v96zm160 256H192v-96h128v96zm0-128H192v-96h128v96zm0-128H192V96h128v96zm160 160v80c0 8.837-7.163 16-16 16H352v-96h128zm0-32H352v-96h128v96zm0-128H352V96h128v96z"></path></svg>
                        <Text>Key Dates</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width='30' aria-hidden="true" focusable="false" data-prefix="fas" data-icon="copyright" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm117.134 346.753c-1.592 1.867-39.776 45.731-109.851 45.731-84.692 0-144.484-63.26-144.484-145.567 0-81.303 62.004-143.401 143.762-143.401 66.957 0 101.965 37.315 103.422 38.904a12 12 0 0 1 1.238 14.623l-22.38 34.655c-4.049 6.267-12.774 7.351-18.234 2.295-.233-.214-26.529-23.88-61.88-23.88-46.116 0-73.916 33.575-73.916 76.082 0 39.602 25.514 79.692 74.277 79.692 38.697 0 65.28-28.338 65.544-28.625 5.132-5.565 14.059-5.033 18.508 1.053l24.547 33.572a12.001 12.001 0 0 1-.553 14.866z"></path></svg>
                        <Text>Deliverables</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width="30" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"></path></svg>
                        <Text>Resources</Text>
                    </Box>
                    <Box id='nav-row' sx={{ display: 'flex', fontSize: '1.125em', cursor: 'pointer', textTransform: 'uppercase', alignItems: 'center', gap: '1em', ':hover': { textDecoration: 'underline', color: '#4e73c2' } }}>
                        <svg width="30" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M532 386.2c27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.3 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.2 2.1 18.7 3.7 28.4 4.9C208.1 407.6 281.8 448 368 448c20.8 0 40.8-2.4 59.8-6.8C456.3 459.7 499.4 480 553 480c9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25-.4-.3-22.5-24.1-37.8-54.8zm-392.8-92.3L122.1 305c-14.1 9.1-28.5 16.3-43.1 21.4 2.7-4.7 5.4-9.7 8-14.8l15.5-31.1L77.7 256C64.2 242.6 48 220.7 48 192c0-60.7 73.3-112 160-112s160 51.3 160 112-73.3 112-160 112c-16.5 0-33-1.9-49-5.6l-19.8-4.5zM498.3 352l-24.7 24.4 15.5 31.1c2.6 5.1 5.3 10.1 8 14.8-14.6-5.1-29-12.3-43.1-21.4l-17.1-11.1-19.9 4.6c-16 3.7-32.5 5.6-49 5.6-54 0-102.2-20.1-131.3-49.7C338 339.5 416 272.9 416 192c0-3.4-.4-6.7-.7-10C479.7 196.5 528 238.8 528 288c0 28.7-16.2 50.6-29.7 64z"></path></svg>
                        <Text>Contact Us</Text>
                    </Box>
                </Box>
            </Appbar>

            <Box sx={{ overflow: 'hidden', position: 'fixed', zIndex: -2 }}>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="3000" height="1000" preserveAspectRatio="none" viewBox="0 0 3000 1000">
                    <g mask="url(&quot;#SvgjsMask1089&quot;)" fill="none">
                        <path d="M2610.15-97.1C2185.69-48.74 1926.29 888.18 1215.8 890.77 505.3 893.36 186.94 455.95-178.56 450.77" opacity='0.59' stroke="#3379c2" stroke-width="2"></path>
                        <path d="M1649.95-91.49C1436.1-55.08 1531.45 451.69 989.57 471.37 447.69 491.05 8.55 789.1-331.18 791.37" opacity='0.59' stroke="#3379c2" stroke-width="2"></path>
                        <path d="M1739.36-80.89C1455.95 18.2 1567.64 853.2 989.17 856.92 410.7 860.64-123.02 460.33-511.2 456.92" opacity='0.59' stroke="#3379c2" stroke-width="2"></path>
                        <path d="M1821.89-137.98C1618.29-106.46 1717.21 356.87 1182.93 382.49 648.64 408.11 242.03 806.78-95 812.49" opacity='0.59' stroke="#3379c2" stroke-width="2"></path>
                        <path d="M1986.97-15.7C1781.63-14.28 1808.88 174.2 1189.19 179.83 569.5 185.46 8.07 625.55-406.36 629.83" opacity='0.59' stroke="#3379c2" stroke-width="2"></path>
                    </g>
                    <defs>
                        <mask id="SvgjsMask1089">
                            <rect width="3000" height="1000" fill="#ffffff"></rect>
                        </mask>
                    </defs>
                </svg>
            </Box>
            <Box sx={{ marginBlock: '2em' }}>
                <Box
                    sx={{
                        display: 'block', maxWidth: '700px', margin: 'auto', position: 'relative', background: '#fff', boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 1px 3px 0 rgba(63,63,68,.15)', borderRadius: '3px', height: ['300px', '400px'], transition: 'box-shadow .2s ease-in-out,transform .1s ease-in-out', textDecoration: 'none', color: 'black', overflow: 'hidden'
                    }}>
                    <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridTemplateColumns: '30% 68%', height: '100%',  gap: '1em' }}>
                        <Box id='imageSection' sx={{ height: 'inherit', paddingBlock: '2em' }}>
                            <Box sx={{ display: 'grid', alignItems: 'center', justifyContent: 'center', gridAutoFlow: 'column', height: 'inherit', borderRight: '2px solid #f1f3f4' }}>
                                <Box id='tile-avatar' sx={{ width: ['60px', '120px'], height: ['60px', '120px'], position: 'relative' }}>
                                    <Image sx={{ borderRadius: '50%', boxShadow: '0 0 0 1px rgba(63,63,68,.05), 0 3px 8px 0 rgba(63,63,68,.15)', background: 'white' }} src={GCImage2} />
                                </Box>
                            </Box>
                        </Box>
                        <Box id='information' sx={{alignSelf:'center'}}>
                            <Box id='informationBox' sx={{ display: 'grid', justifyContent: 'center', gap: '2em'}}>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '1em' }}>
                                        <svg width='15' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>
                                        <Box>
                                            <Heading as='h3'>Sponsor Main Contact</Heading>
                                            <Text>Sami Joe</Text>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '1em' }}>
                                        <svg width='15' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16 fa-2x"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" class=""></path></svg>
                                        <Text>email@external.ca</Text>
                                    </Box>
                                </Box>
                                <Box>
                                    <Box sx={{ display: 'flex', gap: '1em' }}>
                                        <svg width='15' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M313.6 288c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zM416 464c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-41.6C32 365.9 77.9 320 134.4 320c19.6 0 39.1 16 89.6 16 50.4 0 70-16 89.6-16 56.5 0 102.4 45.9 102.4 102.4V464zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z" class=""></path></svg>
                                        <Box>
                                            <Heading as='h3'>Globacore Main Contact</Heading>
                                            <Text>Hank Hill</Text>
                                        </Box>
                                    </Box>
                                    <Box sx={{ display: 'flex', gap: '1em' }}>
                                        <svg width='15' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-envelope fa-w-16 fa-2x"><path fill="currentColor" d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM48 96h416c8.8 0 16 7.2 16 16v41.4c-21.9 18.5-53.2 44-150.6 121.3-16.9 13.4-50.2 45.7-73.4 45.3-23.2.4-56.6-31.9-73.4-45.3C85.2 197.4 53.9 171.9 32 153.4V112c0-8.8 7.2-16 16-16zm416 320H48c-8.8 0-16-7.2-16-16V195c22.8 18.7 58.8 47.6 130.7 104.7 20.5 16.4 56.7 52.5 93.3 52.3 36.4.3 72.3-35.5 93.3-52.3 71.9-57.1 107.9-86 130.7-104.7v205c0 8.8-7.2 16-16 16z" class=""></path></svg>
                                        <Text>email@Globacore.ca</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
