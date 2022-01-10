import Tile from './Tile';
import Appbar from './Appbar';
import Button from './Button';
import Form from './Form';
import FormElement from './FormElement';
import { Box, Heading, Input, Text } from 'theme-ui';
import { useState } from 'react';


//------------------------------------------------------------------------------
import GCImage from './stories/assets/gc.png'
import SponsorTable from './SponsorTable';
//------------------------------------------------------------------------------


const formData = [
    {
        "name": "name",
        "type": "text",
        "label": "Sponsor Name"
    },
    {
        "name": "level",
        "type": "text",
        "label": "Sponsor Level"
    },
    {
        "name": "address",
        "type": "text",
        "label": "Address"
    },
    {
        "name": "mcontact",
        "type": "text",
        "label": "Main Contact Name"
    },
    {
        "name": "city",
        "type": "text",
        "label": "City"
    },
    {
        "name": "mcontactemail",
        "type": "text",
        "label": "Main Contact Email"
    },
    {
        "name": "provstate",
        "type": "text",
        "label": "State / Province"
    },
    {
        "name": "scontactname",
        "type": "text",
        "label": "Secondary Contact Name"
    },
    {
        "name": "zipcode",
        "type": "text",
        "label": "Zip / Postal Code"
    },
    {
        "name": "scontactemail",
        "type": "text",
        "label": "Secondary Contact Email"
    },
    {
        "name": "country",
        "type": "text",
        "label": "Country"
    },
]



export default function SampleCreateSponsorView() {
    return (
        <Box>
            <Appbar logo={GCImage}>
                <Box sx={{ display: 'grid', gridAutoFlow: 'row', justifyContent: 'center', gridGap: '2em', marginBlock: '2em', color: 'grey' }}>
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

            <Box sx={{ maxWidth: '1400px', marginInline: 'auto', marginBlock: ['2em'], padding: ['1em', '2em', '2em'], background: 'white' }}>
                <Heading>Create New Sponsor</Heading>
                <Form onSubmit={data => console.log(data)}>
                    <Box sx={{ display: 'grid', gridAutoFlow: ['Row', 'column', 'column'], gridAutoColumns: '1fr', gap: ['0.5em', '1em', '1em'] }}>
                        <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                            {formData.map((item, index) =>
                                !(index % 2 == 1) &&
                                <FormElement {...item} key={item.name} />
                            )}
                        </Box>
                        <Box sx={{ display: 'grid', gridAutoFlow: 'Row', gap: ['0.5em', '1em', '1em'], paddingBlock: ['0.5em', '1em', '1em'] }}>
                            {formData.map((item, index) =>
                                (index % 2 == 1) == 1 &&
                                <FormElement {...item} key={item.name} />
                            )}
                        </Box>
                    </Box>
                    <Box sx={{ borderTop: '1px solid grey', marginBlock: '1em' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingBlock: ['0.5em', '1em', '1em'] }}>
                            <Heading sx={{ fontSize: ['1em', '1.5em', '1.5em'], alignSelf: 'center' }}>Sponsor Upload List</Heading>
                            <Button type='button'> Add Asset</Button>
                        </Box>
                        <Box id='asset-table' sx={{ paddingBlock: '1em', display: 'grid', gridAutoRows: '1fr', gridGap: '1em' }}>


                            <Box id='asset-entry' sx={{
                                display: 'grid', border: '1px solid #f1f3f4', gridTemplateColumns: ['66% 30%', '44% 40% 12%', '44% 40% 12%'], gridAutoFlow: 'column', padding: '0.5em', gap: 'min(1em,1vw)', boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)', cursor: 'pointer',
                                ':hover': {
                                    transform: 'scale(1.01)',
                                    boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 3px 8px 0 rgba(63,63,68,.15)'
                                },
                            }}>
                                <Box sx={{ display: 'grid', alignItems: 'center', gridAutoColumns: ' 33% 36% 30%', gridAutoFlow: 'column' }}>
                                    <svg width='32' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm-6 336H54a6 6 0 0 1-6-6V118a6 6 0 0 1 6-6h404a6 6 0 0 1 6 6v276a6 6 0 0 1-6 6zM128 152c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zM96 352h320v-80l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L192 304l-39.515-39.515c-4.686-4.686-12.284-4.686-16.971 0L96 304v48z"></path></svg>
                                    <svg width='16' opacity='0.2' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                                    <Text>Product Logo</Text>
                                </Box>
                                <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: ['66% 30%', '30% 30%', '20% 20%'], gap: 'min(0.5em,1vw)', textTransform: 'uppercase', fontSize: ['0.70em', null, '0.75em'], justifyContent: 'end' }}>
                                    <Button>Remove</Button>
                                </Box>
                                <Box sx={{ display: ['none', 'initial', 'initial'], justifySelf: 'end', alignSelf: 'center' }}>
                                    <Text></Text>
                                </Box>
                            </Box>

                            <Box id='asset-entry' sx={{
                                display: 'grid', border: '1px solid #f1f3f4', gridTemplateColumns: ['66% 30%', '44% 40% 12%', '44% 40% 12%'], gridAutoFlow: 'column', padding: '0.5em', gap: 'min(1em,1vw)', boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)', cursor: 'pointer',
                                ':hover': {
                                    transform: 'scale(1.01)',
                                    boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 3px 8px 0 rgba(63,63,68,.15)'
                                },
                            }}>
                                <Box sx={{ display: 'grid', alignItems: 'center', gridAutoColumns: ' 33% 36% 30%', gridAutoFlow: 'column' }}>
                                    <svg width='32' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 208c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm96 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path></svg>
                                    <svg width='16' opacity='0.2' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                                    <Text>Product Logo 2</Text>
                                </Box>
                                <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: ['66% 48%', '30% 30%', '20% 20%'], gap: 'min(0.5em,1vw)', textTransform: 'uppercase', fontSize: ['0.70em', null, '0.75em'], justifyContent: 'end' }}>
                                    <Button>Remove</Button>
                                </Box>
                                <Box sx={{ display: ['none', 'initial', 'initial'], justifySelf: 'end', alignSelf: 'center' }}>
                                    <Text></Text>
                                </Box>
                            </Box>

                            <Box id='asset-entry' sx={{
                                display: 'grid', border: '1px solid #f1f3f4', gridTemplateColumns: ['66% 30%', '44% 40% 12%', '44% 40% 12%'], gridAutoFlow: 'column', padding: '0.5em', gap: 'min(1em,1vw)', boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)', cursor: 'pointer',
                                ':hover': {
                                    transform: 'scale(1.01)',
                                    boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 3px 8px 0 rgba(63,63,68,.15)'
                                },
                            }}>
                                <Box sx={{ display: 'grid', alignItems: 'center', gridAutoColumns: '33% 36% 30%', gridAutoFlow: 'column' }}>
                                    <svg width='32' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 208c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm96 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path></svg>
                                    <svg width='16' opacity='0.2' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                                    <Text>Product Splash</Text>
                                </Box>
                                <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: ['66% 48%', '30% 30%', '20% 20%'], gap: 'min(0.5em,1vw)', textTransform: 'uppercase', fontSize: ['0.70em', null, '0.75em'], justifyContent: 'end' }}>
                                    <Button>Remove</Button>
                                </Box>
                                <Box sx={{ display: ['none', 'initial', 'initial'], justifySelf: 'end', alignSelf: 'center' }}>
                                    <Text></Text>
                                </Box>
                            </Box>

                            <Box id='asset-entry' sx={{
                                display: 'grid', border: '1px solid #f1f3f4', gridTemplateColumns: ['66% 30%', '44% 40% 12%', '44% 40% 12%'], gridAutoFlow: 'column', padding: '0.5em', gap: 'min(1em,1vw)', boxShadow: '0 0 0.5rem rgba(0, 0, 0, 0.1)', cursor: 'pointer',
                                ':hover': {
                                    transform: 'scale(1.01)',
                                    boxShadow: '0 0 0 1px rgba(63,63,68,.05),0 3px 8px 0 rgba(63,63,68,.15)'
                                },
                            }}>
                                <Box sx={{ display: 'grid', alignItems: 'center', gridAutoColumns: '33% 36% 30%', gridAutoFlow: 'column' }}>
                                    <svg width='32' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M488 64h-8v20c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12V64H96v20c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12V64h-8C10.7 64 0 74.7 0 88v336c0 13.3 10.7 24 24 24h8v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h320v-20c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v20h8c13.3 0 24-10.7 24-24V88c0-13.3-10.7-24-24-24zM96 372c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12H44c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm288 208c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm0-168c0 6.6-5.4 12-12 12H140c-6.6 0-12-5.4-12-12v-96c0-6.6 5.4-12 12-12h232c6.6 0 12 5.4 12 12v96zm96 152c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40zm0-96c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40z"></path></svg>
                                    <svg width='16' opacity='0.2' aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                                    <Text>Product Video</Text>
                                </Box>
                                <Box sx={{ display: 'grid', gridAutoFlow: 'column', gridAutoColumns: ['48% 48%', '30% 30%', '20% 20%'], gap: 'min(0.5em,1vw)', textTransform: 'uppercase', fontSize: ['0.70em', null, '0.75em'], justifyContent: 'end' }}>
                                    <Button>Remove</Button>
                                </Box>
                                <Box sx={{ display: ['none', 'initial', 'initial'], justifySelf: 'end', alignSelf: 'center' }}>
                                    <Text></Text>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Button type="submit">Submit</Button>
                </Form>
            </Box>
        </Box>
    )
}
