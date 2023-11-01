/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    //'hello',
    /* {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
      //items: ['tutorial-basics/.'],
      //dirName: '.',
    }, */
    //{type: 'autogenerated', dirName: '.'},

    /*----------------git 学习-----------------*/
    {
      type: 'category',
      label: 'Git 学习',
      items:
        [
          'GitStudy/GitStudy',
        ]
    },

    /*----------------软件-----------------*/
    {
      type: 'category',
      label: '软件',
      items:
        [
          'Software/SoftwareLinks',

          /*--------------------VSCode-------------------*/
          {
            type: 'category',
            label: 'VSCode',
            items:
              [
                'Software/VSCode/OpenWithVSCode',

              ]
          },

        ]
    },



    /*----------------网站-----------------*/
    {
      type: 'category',
      label: '网站',
      items:
        [
          'MyWebsite/StudyBuildWebsite',


          //'MyWebsite/Sidebar',
        ],
    },
  ],

  //divination:
    //[
      /* {
        type: 'doc',
        id: 'Divination/general',
        label: '通用基础知识',
      }, */

      /* {
        type: 'category',
        label: '大六壬',
        items:
          [
            
          ],
      }, */
    //]
};

module.exports = sidebars;
