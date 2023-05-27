'use client';

import React, { useState } from 'react';
import styles from './question.module.scss';
import { FiPlus } from 'react-icons/fi';
import { Collapse } from '@mui/material';

const Question = () => {
  const [text, setText] = useState(false);
  const [activeQuestions, setActiveQuestions] = useState<number[]>([]);

  const handleCollapseOrExtend = (id: number) => {
    const exist = activeQuestions.includes(id);

    if (exist) {
      setActiveQuestions((prev) => prev.filter((i) => i !== id));
    } else {
      setActiveQuestions((prev) => [...prev, id]);
    }
  };

  console.log(activeQuestions);
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
        <div className={styles.question}>
          <div className={styles.question_description}>
            <button
              className={styles.btn}
              onClick={() => handleCollapseOrExtend(0)}
            >
              <FiPlus className={styles.btn_plus} />

              <h3>What kind services do you offer?</h3>
            </button>

            <Collapse in={activeQuestions.includes(0)}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                explicabo! Officia, perspiciatis voluptatibus possimus quod
                expedita ipsa vel facere nostrum.
              </p>
            </Collapse>
          </div>
        </div>
        <div className={styles.question}>
          <div className={styles.question_description}>
            <button
              className={styles.btn}
              onClick={() => handleCollapseOrExtend(1)}
            >
              <FiPlus className={styles.btn_plus} />

              <h3>What kind services do you offer?</h3>
            </button>
            <Collapse in={activeQuestions.includes(1)}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                explicabo! Officia, perspiciatis voluptatibus possimus quod
                expedita ipsa vel facere nostrum.
              </p>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
