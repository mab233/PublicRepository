import { Injectable } from '@angular/core';

import { QuestionBase } from './question-base';


import { RadioQuestion } from './question-radio';

@Injectable()
export class QuestionService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous
  getQuestions() {

    // var currentUser = JSON.parse(localStorage.getItem("currentUser"));
    // if (!currentUser) {
    //   currentUser = localStorage.setItem("currentUser", JSON.stringify({ username: "admin" }));
    // }
    // var uname = currentUser && currentUser.username;
    // let username: string = uname || "";

    let questions: QuestionBase<any>[] = [

      new RadioQuestion({
        key: 'C1:Q1',
        catId : 1,
        quesId : 1,
       // username: uname,
        label: 'I enjoy the food quality at the cafeteria',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 1
      }),

      new RadioQuestion({
        key: 'C1:Q2',
        catId : 1,
        quesId : 2,
        label: 'I feel there are sufficient food options available',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 2
      }),

      new RadioQuestion({
        key: 'C2:Q3',
        catId : 2,
        quesId : 3,
        label: 'I am paid fairly for the work I do',
        options: [
          /*{key: 'far exceeds',  value: 'Far Exceeds'},
          {key: 'exceeds',  value: 'Exceeds'},
          {key: 'meets',   value: 'Meets'},
          {key: 'meets some', value: 'Meets Some'},
          {key: 'does not meet', value: 'Does not Meet'}*/
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }


        ],
        order: 3
      }),

      new RadioQuestion({
        key: 'C2:Q4',
        catId : 2,
        quesId : 4,
        label: 'My pay is linked to my performance',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 4
      }),

      new RadioQuestion({
        key: 'C3:Q5',
        catId : 3,
        quesId : 5,
        label: 'People are recognized when they go above & beyond for customer on my team',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 5
      }),

      new RadioQuestion({
        key: 'C4:Q6',
        catId : 4,
        quesId : 6,
        label: 'I am enjoying the types of projects I am being given',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 6
      }),

      new RadioQuestion({
        key: 'C4:Q7',
        catId : 4,
        quesId : 7,
        label: 'I am a proud to be a member of this team',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 7
      }),

      new RadioQuestion({
        key: 'C4:Q8',
        catId : 4,
        quesId : 8,
        label: 'The workload is evenly distributed across my team',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 8
      }),

      new RadioQuestion({
        key: 'C5:Q9',
        catId : 5,
        quesId : 9,
        label: 'I have been made aware of the structure and processes at the organization',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 9
      }),

      new RadioQuestion({
        key: 'C4:Q10',
        catId : 4,
        quesId : 10,
        label: 'I am comfortable voicing my concerns to my supervisor',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 10
      }),

      new RadioQuestion({
        key: 'C4:Q11',
        catId : 4,
        quesId : 11,
        label: 'Your supervisor handle employee issues well',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 11
      }),

      new RadioQuestion({
        key: 'C4:Q12',
        catId : 4,
        quesId : 12,
        label: 'Your team inspires you to do your best work',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 12
      }),

      new RadioQuestion({
        key: 'C4:Q13',
        catId : 4,
        quesId : 13,
        label: 'I have the training I need to be successful in the role',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 13
      }),

      new RadioQuestion({
        key: 'C4:Q14',
        catId : 4,
        quesId : 14,
        label: 'I find my day-to-day work challenging and interesting',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 14
      }),

      new RadioQuestion({
        key: 'C5:Q15',
        catId : 5,
        quesId : 15,
        label: 'The organization is up-to-date with technologies',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 15
      }),

      new RadioQuestion({
        key: 'C8:Q16',
        catId : 8,
        quesId : 16,
        label: 'I feel I am able to communicate freely up the line, even when I am communicating bad news',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 16
      }),


      new RadioQuestion({
        key: 'C8:Q17',
        catId : 8,
        quesId : 17,
        label: 'I am satisfied being able to have regular communications with manager about what is happening at this company',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 17
      }),

      new RadioQuestion({
        key: 'C7:Q18',
        catId : 7,
        quesId : 18,
        label: 'My organization is dedicated to diversity and inclusiveness.',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 18
      }),

      new RadioQuestion({
        key: 'C7:Q19',
        catId : 7,
        quesId : 19,
        label: 'I understand how my work impacts the organization’s business goals',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 19
      }),


      new RadioQuestion({
        key: 'C7:Q20',
        catId : 7,
        quesId : 20,
        label: 'The workplace culture is good',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 20
      }),

      new RadioQuestion({
        key: 'C7:Q21',
        catId : 7,
        quesId : 21,
        label: 'The organization operates in a socially responsible manner',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 21
      })
      
    ];
    // console.log(questions);
    return questions.sort((a, b) => a.order - b.order);
  }

  getPerfQuestions() {

    let perfQuestions: QuestionBase<any>[] = [
      
       new RadioQuestion({
        key: 'C9:Q11',
        catId : 9,
        quesId : 20,
        label: 'They come on time',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 1
      }),

      new RadioQuestion({
        key: 'C9:Q22',
        catId : 9,
        quesId : 21,
        label: 'The deadlines are met',
        options: [
          { key: 'strongly disagree', value: 'Strongly Disagree' },
          { key: 'disagree', value: 'Disagree' },
          { key: 'neither disagree or agree', value: 'Neither Disagree or Agree' },
          { key: 'agree', value: 'Agree' },
          { key: 'strongly agree', value: 'Strongly Agree' }

        ],
        order: 2
      })

    ];

    return perfQuestions.sort((a,b) => a.order - b.order);

  }

}
