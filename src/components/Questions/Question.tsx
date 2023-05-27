'use client';

import React, { useState } from 'react';
import styles from './question.module.scss';
import { FiPlus } from 'react-icons/fi';
import { Collapse } from '@mui/material';

const Question = () => {
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);

  const questionStore = [
    {
      id: 0,
      question: 'What kind of services do you provide ?',
      description:
        'Company will perform the Services described in each Quote/Proposal. Company retains ownership of any portion of Company developed tools or products that are used in or form a part of computer programs or documentation resulting from a particular service provided. Company reserves the right to market to other Clients the skills, designs, processes, procedures, formulas,',
    },
    {
      id: 1,
      question: 'What kind of services do you provide ?',
      description:
        'Company will perform the Services described in each Quote/Proposal. Company retains ownership of any portion of Company developed tools or products that are used in or form a part of computer programs or documentation resulting from a particular service provided. Company reserves the right to market to other Clients the skills, designs, processes, procedures, formulas,',
    },
    {
      id: 2,
      question: 'What kind of services do you provide ?',
      description:
        'Company will perform the Services described in each Quote/Proposal. Company retains ownership of any portion of Company developed tools or products that are used in or form a part of computer programs or documentation resulting from a particular service provided. Company reserves the right to market to other Clients the skills, designs, processes, procedures, formulas,',
    },
    {
      id: 3,
      question: 'What kind of services do you provide ?',
      description:
        'Company will perform the Services described in each Quote/Proposal. Company retains ownership of any portion of Company developed tools or products that are used in or form a part of computer programs or documentation resulting from a particular service provided. Company reserves the right to market to other Clients the skills, designs, processes, procedures, formulas,',
    },
    {
      id: 4,
      question: 'What kind of services do you provide ?',
      description:
        'Company will perform the Services described in each Quote/Proposal. Company retains ownership of any portion of Company developed tools or products that are used in or form a part of computer programs or documentation resulting from a particular service provided. Company reserves the right to market to other Clients the skills, designs, processes, procedures, formulas,',
    },
  ];

  const handleCollapseOrExtend = (id: number) => {
    const exist = activeQuestions.includes(id);

    if (exist) {
      setActiveQuestions((prev) => prev.filter((i) => i !== id));
    } else {
      setActiveQuestions((prev) => [...prev, id]);
    }
  };
  return (
    <div className={styles.questions_container}>
      <p>HELP CENTER</p>
      <h2>Frequently Asked Questions</h2>
      <p>
        Our customer support team is here to assist you. Start by browsing our{' '}
        <br />
        FAQ section to find answers to your questions.
      </p>
      <div className={styles.questions}>
        {questionStore.map((item) => {
          return (
            <div key={item.id} className={styles.question}>
              <div className={styles.question_description}>
                <button
                  className={styles.btn}
                  onClick={() => handleCollapseOrExtend(item.id)}
                >
                  <FiPlus className={styles.btn_plus} />

                  <h3>{item.question}</h3>
                </button>

                <Collapse in={activeQuestions.includes(item.id)}>
                  <p>{item.description}</p>
                </Collapse>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
