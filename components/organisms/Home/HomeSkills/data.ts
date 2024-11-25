import { nextJs, tailwind } from '@/components/icons';

/* eslint-disable max-len */
interface Skill {
    name: string;
    color: string;
    icon: string;
    hide?: boolean;
}

export const skills: Skill[] = [
    {
        name: 'Core JAVA',
        icon: 'M 17.662109 -0.015625 C 19.190109 3.063375 12.191016 4.9633437 11.541016 7.5273438 C 10.946016 9.8833438 15.696172 12.621094 15.701172 12.621094 C 14.979172 11.647094 14.457422 10.842219 13.732422 9.3242188 C 12.506422 6.7572187 20.966109 4.108375 17.662109 -0.015625 z M 22.722656 4.1972656 C 22.722656 4.1972656 17.386281 4.5194844 17.113281 7.7714844 C 16.992281 9.2194844 18.515594 9.992875 18.558594 11.046875 C 18.595594 11.907875 17.648438 12.623047 17.648438 12.623047 C 17.648438 12.623047 19.211047 12.383312 19.748047 11.070312 C 20.342047 9.6143125 18.747781 8.5517656 18.925781 7.3847656 C 19.095781 6.2687656 22.722656 4.1972656 22.722656 4.1972656 z M 12.761719 12.623047 C 12.761719 12.623047 7.2773438 12.550172 7.2773438 14.076172 C 7.2763438 15.671172 14.457938 15.782734 19.585938 14.802734 C 19.585938 14.802734 20.749281 14.165266 21.113281 13.822266 C 17.753281 14.495266 10.287109 14.300797 10.287109 13.716797 C 10.287109 13.178797 12.761719 12.623047 12.761719 12.623047 z M 23.681641 12.664062 C 23.07915 12.638797 22.419687 12.830578 21.851562 13.236328 C 23.038563 12.979328 24.039063 13.709734 24.039062 14.552734 C 24.039062 16.446734 21.318359 18.240234 21.318359 18.240234 C 21.318359 18.240234 25.53125 17.755625 25.53125 14.640625 C 25.53125 13.354375 24.685791 12.706172 23.681641 12.664062 z M 10.816406 15.431641 C 9.9584062 15.430641 8.6816406 16.111625 8.6816406 16.765625 C 8.6816406 18.081625 15.136062 19.095828 19.914062 17.173828 L 18.259766 16.132812 C 15.020766 17.195812 9.0484062 16.854641 10.816406 15.431641 z M 12.029297 18.238281 C 10.850297 18.238281 10.085938 19.031328 10.085938 19.611328 C 10.085938 21.407328 17.124062 21.468578 19.914062 19.642578 L 18.140625 18.537109 C 16.058625 19.492109 10.824297 19.622281 12.029297 18.238281 z M 6.9199219 20.990234 C 5.2392793 20.937557 4.46875 21.796297 4.46875 22.498047 C 4.46875 26.228047 22.722656 26.049328 22.722656 22.236328 C 22.722656 21.603328 22.017719 21.302203 21.761719 21.158203 C 23.251719 24.803203 6.6503906 24.553344 6.6503906 22.402344 C 6.6503906 21.912344 7.5294375 21.412625 8.6484375 21.640625 C 8.6484375 21.640625 8.2382656 21.164312 7.6972656 21.070312 C 7.4196406 21.022437 7.1600137 20.99776 6.9199219 20.990234 z M 25.53125 23.794922 C 22.63425 26.630922 14.659344 28.352563 7.2773438 26.601562 C 14.694344 29.607563 25.49625 27.275922 25.53125 23.794922 z',
        color: '#3178c6',
    },
    {
        name: 'TypeScript',
        icon: 'M3,3H21V21H3V3M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86M13,11.25H8V12.75H9.5V20H11.25V12.75H13V11.25Z',
        color: '#3178c6',
    },
    {
        name: 'JavaScript',
        icon: 'M3,3H21V21H3V3M7.73,18.04C8.13,18.89 8.92,19.59 10.27,19.59C11.77,19.59 12.8,18.79 12.8,17.04V11.26H11.1V17C11.1,17.86 10.75,18.08 10.2,18.08C9.62,18.08 9.38,17.68 9.11,17.21L7.73,18.04M13.71,17.86C14.21,18.84 15.22,19.59 16.8,19.59C18.4,19.59 19.6,18.76 19.6,17.23C19.6,15.82 18.79,15.19 17.35,14.57L16.93,14.39C16.2,14.08 15.89,13.87 15.89,13.37C15.89,12.96 16.2,12.64 16.7,12.64C17.18,12.64 17.5,12.85 17.79,13.37L19.1,12.5C18.55,11.54 17.77,11.17 16.7,11.17C15.19,11.17 14.22,12.13 14.22,13.4C14.22,14.78 15.03,15.43 16.25,15.95L16.67,16.13C17.45,16.47 17.91,16.68 17.91,17.26C17.91,17.74 17.46,18.09 16.76,18.09C15.93,18.09 15.45,17.66 15.09,17.06L13.71,17.86Z',
        color: '#f7df1e',
    },
    {
        name: 'React',
        icon: 'M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.3C10.45,17.71 9.94,17.07 9.46,16.4C8.64,16.32 7.83,16.2 7.06,16.04C6.55,18.18 6.74,19.65 7.37,20M8.08,14.26L7.79,13.75C7.68,14.04 7.57,14.33 7.5,14.61C7.77,14.67 8.07,14.72 8.38,14.77C8.28,14.6 8.18,14.43 8.08,14.26M14.62,13.5L15.43,12L14.62,10.5C14.32,9.97 14,9.5 13.71,9.03C13.17,9 12.6,9 12,9C11.4,9 10.83,9 10.29,9.03C10,9.5 9.68,9.97 9.38,10.5L8.57,12L9.38,13.5C9.68,14.03 10,14.5 10.29,14.97C10.83,15 11.4,15 12,15C12.6,15 13.17,15 13.71,14.97C14,14.5 14.32,14.03 14.62,13.5M12,6.78C11.81,7 11.61,7.23 11.41,7.5C11.61,7.5 11.8,7.5 12,7.5C12.2,7.5 12.39,7.5 12.59,7.5C12.39,7.23 12.19,7 12,6.78M12,17.22C12.19,17 12.39,16.77 12.59,16.5C12.39,16.5 12.2,16.5 12,16.5C11.8,16.5 11.61,16.5 11.41,16.5C11.61,16.77 11.81,17 12,17.22M16.62,4C16,3.62 14.62,4.2 13.03,5.7C13.55,6.29 14.06,6.93 14.54,7.6C15.36,7.68 16.17,7.8 16.94,7.96C17.45,5.82 17.26,4.35 16.62,4M15.92,9.74L16.21,10.25C16.32,9.96 16.43,9.67 16.5,9.39C16.23,9.33 15.93,9.28 15.62,9.23C15.72,9.4 15.82,9.57 15.92,9.74M17.37,2.69C18.84,3.53 19,5.74 18.38,8.32C20.92,9.07 22.75,10.31 22.75,12C22.75,13.69 20.92,14.93 18.38,15.68C19,18.26 18.84,20.47 17.37,21.31C15.91,22.15 13.92,21.19 12,19.36C10.08,21.19 8.09,22.15 6.62,21.31C5.16,20.47 5,18.26 5.62,15.68C3.08,14.93 1.25,13.69 1.25,12C1.25,10.31 3.08,9.07 5.62,8.32C5,5.74 5.16,3.53 6.62,2.69C8.09,1.85 10.08,2.81 12,4.64C13.92,2.81 15.91,1.85 17.37,2.69M17.08,12C17.42,12.75 17.72,13.5 17.97,14.26C20.07,13.63 21.25,12.73 21.25,12C21.25,11.27 20.07,10.37 17.97,9.74C17.72,10.5 17.42,11.25 17.08,12M6.92,12C6.58,11.25 6.28,10.5 6.03,9.74C3.93,10.37 2.75,11.27 2.75,12C2.75,12.73 3.93,13.63 6.03,14.26C6.28,13.5 6.58,12.75 6.92,12M15.92,14.26C15.82,14.43 15.72,14.6 15.62,14.77C15.93,14.72 16.23,14.67 16.5,14.61C16.43,14.33 16.32,14.04 16.21,13.75L15.92,14.26M13.03,18.3C14.62,19.8 16,20.38 16.62,20C17.26,19.65 17.45,18.18 16.94,16.04C16.17,16.2 15.36,16.32 14.54,16.4C14.06,17.07 13.55,17.71 13.03,18.3M8.08,9.74C8.18,9.57 8.28,9.4 8.38,9.23C8.07,9.28 7.77,9.33 7.5,9.39C7.57,9.67 7.68,9.96 7.79,10.25L8.08,9.74M10.97,5.7C9.38,4.2 8,3.62 7.37,4C6.74,4.35 6.55,5.82 7.06,7.96C7.83,7.8 8.64,7.68 9.46,7.6C9.94,6.93 10.45,6.29 10.97,5.7Z',
        color: '#00c2e6',
    },
    {
        name: 'Next.js',
        icon: nextJs,
        color: '#0070f3',
    },
    {
        name: 'Astro',
        icon: 'M9.4 14.5c-1.5.3-3 .8-4.4 1.5L8.6 4c.2-.5.3-.8.4-1 .1-.2.3-.3.5-.4.2-.1.5-.1 1.1-.1h2.6c.6 0 .9 0 1.1.1.3.1.5.2.7.4.2.2.2.5.4 1L19 16c-1.4-.7-2.8-1.2-4.4-1.5l-2.4-8c0-.2-.2-.3-.4-.2-.1 0-.2.1-.2.2l-2.2 8zm6 2c-.6.5-1.8.9-3.2.9-1.7 0-3.1-.5-3.5-1.2-.1.4-.2.9-.2 1.2 0 0-.1 1.5.9 2.5 0-.5.4-1 1-1 .9 0 .9.8.9 1.4v.1c0 1 .6 1.8 1.4 2.2-.1-.3-.2-.6-.2-.9 0-.9.5-1.3 1.2-1.7.5-.3 1.1-.7 1.4-1.4.2-.4.3-.8.3-1.2.1-.3.1-.6 0-.9z',
        color: '#EC682C',
        hide: true,
    },
    {
        name: 'Tailwind CSS',
        icon: tailwind,
        color: '#38bdf8',
    },
    {
        name: 'HTML5',
        icon: 'M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z',
        color: '#e34f26',
    },
    {
        name: 'CSS3',
        icon: 'M5,3L4.35,6.34H17.94L17.5,8.5H3.92L3.26,11.83H16.85L16.09,15.64L10.61,17.45L5.86,15.64L6.19,14H2.85L2.06,18L9.91,21L18.96,18L20.16,11.97L20.4,10.76L21.94,3H5Z',
        color: '#3572b5',
    },
    {
        name: 'Mongo DB',
        icon: 'M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z',
        color: '#69a14a',
    },
    {
        name: 'MySql',
        icon: 'M 3.125 1 C 2.219 1 1.5030625 1.4805 1.1640625 2.3125 C 1.0570625 2.5695 1.0029531 2.8420469 1.0019531 3.1230469 C 1.0009531 4.0540469 1.6009375 4.8097188 1.9609375 5.2617188 C 2.0239375 5.3407187 2.080625 5.4110938 2.140625 5.4960938 L 2.3027344 5.7109375 C 2.4637344 5.9219375 2.6470781 6.16125 2.7050781 6.28125 C 2.7240781 6.33625 2.7492031 6.4326875 2.7832031 6.5546875 C 2.9402031 7.1196875 3.2332187 8.16975 3.6992188 8.96875 C 3.8872187 9.29075 4.1517969 9.6954687 4.3417969 9.9804688 C 4.2147969 10.616469 4 11.788 4 12.5 C 4 13.75 4.2592188 14.753875 4.8242188 15.671875 C 5.0332187 15.999875 5.671 17 6.75 17 C 7.133 17 7.7694062 16.850391 7.9414062 15.900391 C 8.7064063 16.887391 10 18.125 12 19 C 12 19 8.2507969 14.625438 7.5917969 11.898438 C 7.5917969 11.898437 6.874625 12.625375 6.265625 14.109375 C 6.083625 13.651375 6 13.135 6 12.5 C 6 11.873 6.2758125 10.471375 6.3828125 9.984375 L 6.4765625 9.5605469 L 6.2304688 9.203125 C 6.2264687 9.196125 5.7227344 8.4688906 5.4277344 7.9628906 C 5.0917344 7.3868906 4.8439375 6.4955781 4.7109375 6.0175781 C 4.6459375 5.7845781 4.594875 5.6159531 4.546875 5.5019531 C 4.371875 5.1229531 4.115625 4.7900937 3.890625 4.4960938 L 3.765625 4.3300781 C 3.702625 4.2390781 3.6193906 4.133625 3.5253906 4.015625 C 3.3423906 3.785625 3.0017188 3.3570312 3.0117188 3.0820312 L 3.1230469 3.0039062 L 3.125 3 C 3.92 3 4.9440781 3.5643437 5.3300781 3.7773438 C 5.4560781 3.8463438 5.5486563 3.8940156 5.5976562 3.9160156 L 5.7714844 3.9921875 L 6.1132812 4.0039062 C 6.5602813 4.0139062 7.9189063 4.0456875 8.8789062 4.4296875 C 10.629906 5.1296875 11.598031 5.830375 12.582031 7.109375 C 14.906031 10.131375 15.763484 14.044984 15.771484 14.083984 L 15.896484 14.648438 L 16.443359 14.826172 C 16.462359 14.833172 17.992922 15.344641 19.419922 16.681641 C 17.624922 17.125641 17 18 17 18 C 17 18 17.476 18.928 19.75 20.375 C 21.125 21.25 21.875 21.875 23 23 C 23 23 21.875688 20.499813 20.304688 18.507812 C 21.500687 18.124813 22.970703 17.925781 22.970703 17.925781 L 22.060547 16.664062 C 20.562547 14.587063 18.553656 13.538859 17.597656 13.130859 C 17.265656 11.864859 16.262969 8.614625 14.167969 5.890625 C 12.968969 4.331625 11.693094 3.3993125 9.6210938 2.5703125 C 8.3940937 2.0803125 6.9187188 2.0218594 6.2617188 2.0058594 C 5.6867187 1.6898594 4.409 1 3.125 1 z M 7.1875 5 C 7.1875 5 6.75 5 6.25 5.125 L 7.625 6.9980469 C 8 6.5000469 8 5.9179688 8 5.9179688 C 8 5.9179688 7.7505 5.25 7.1875 5 z',
        color: '#69a14a',
    },
    {
        name: 'Express',
        icon: 'M22 17.5c-.7.2-1.2 0-1.6-.6l-2.9-4-.4-.5-3.4 4.5c-.4.5-.8.8-1.5.6l4.3-5.8-4-5.2c.7-.1 1.2-.1 1.6.5l3 4 3-4c.4-.5.8-.8 1.5-.6l-1.5 2.1-2.1 2.8c-.2.3-.2.5 0 .8l4 5.4zM2 11.6l.4-1.7c1-3.4 4.9-4.8 7.6-2.7 1.6 1.2 2 3 1.9 5h-9c-.1 3.5 2.4 5.7 5.7 4.6 1.1-.4 1.8-1.3 2.1-2.4.2-.6.5-.6 1-.5-.3 1.4-.9 2.6-2.2 3.3-1.9 1.1-4.6.7-6.1-.8-.9-.9-1.2-2-1.4-3.2.1-.2 0-.4 0-.6v-1zm.9-.2h8C10.9 8.8 9.3 7 7.2 7 4.8 7 3 8.8 2.9 11.4z',
        color: '#259dff',
    },
    {
        name: 'Git',
        icon: 'M2.6,10.59L8.38,4.8L10.07,6.5C9.83,7.35 10.22,8.28 11,8.73V14.27C10.4,14.61 10,15.26 10,16A2,2 0 0,0 12,18A2,2 0 0,0 14,16C14,15.26 13.6,14.61 13,14.27V9.41L15.07,11.5C15,11.65 15,11.82 15,12A2,2 0 0,0 17,14A2,2 0 0,0 19,12A2,2 0 0,0 17,10C16.82,10 16.65,10 16.5,10.07L13.93,7.5C14.19,6.57 13.71,5.55 12.78,5.16C12.35,5 11.9,4.96 11.5,5.07L9.8,3.38L10.59,2.6C11.37,1.81 12.63,1.81 13.41,2.6L21.4,10.59C22.19,11.37 22.19,12.63 21.4,13.41L13.41,21.4C12.63,22.19 11.37,22.19 10.59,21.4L2.6,13.41C1.81,12.63 1.81,11.37 2.6,10.59Z',
        color: '#fc6d26',
    },
    {
        name: 'Sanity',
        icon: 'M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125',
        color: '#888888',
    },
];