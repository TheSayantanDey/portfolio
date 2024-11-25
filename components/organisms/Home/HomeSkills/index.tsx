import type { CSSProperties } from 'react';

import { Icon } from '@/components/atoms/icon';
import { Section } from '@/components/atoms/section';
import { hexToRgb } from '@/utils/color';
import cx from '@/utils/cx';
import React, { type FC } from 'react'
import { skills } from './data';
import SectionHeader from '../../../molecules/SectionHeader'

const Skills: FC<JSX.IntrinsicElements['section']> = ({
}) => (
    <Section id={'skills'} tw="max-w-2xl mx-auto">
        <SectionHeader title="Skills" href="/" />
        <ul className={'flex items-center gap-2.5 flex-wrap'}>
            {skills
                .filter((skill) => !skill.hide)
                .map((skill) => {
                    const color = hexToRgb(skill.color, 0, true);
                    return (
                        <li className={'block'} key={skill.name}>
                            <span
                                className={cx(
                                    'flex items-center gap-1.5',
                                    'rounded-4 pl-3 pr-3.5 py-1.5 min-h-9',
                                    'border border-divider',
                                    'text-3xs font-medium cursor-pointer',
                                    'transition-colors',
                                    'bg-brand-200/5 dark:bg-brand-700/10',
                                    'hover:!bg-indigo-500',
                                    'hover:border-tint-border',
                                )}
                                style={{ '--tint': color } as CSSProperties}
                            >
                                <Icon path={skill.icon} className={'size-4'} />
                                <span>{skill.name}</span>
                            </span>
                        </li>
                    );
                })}
        </ul>
    </Section>
);

export default Skills;
