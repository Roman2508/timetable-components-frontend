'use client'

import React from 'react'
import Image from 'next/image'
import styles from './page.module.css'
import Button from '@/src/components/ui/Button/Button'
import { ThemeContext } from './layout'
import cn from 'classnames'
import Paper from '@/src/components/ui/Paper/Paper'
import SwitchColorMode from '@/src/components/ui/SwitchColorMode/SwitchColorMode'
import Modal from '@/src/components/ui/Modal/Modal'
import { handleClickOutside } from '@/src/hooks/handleClickOutside'
import ToggleButtonWrapper from '@/src/components/ui/ToggleButton/ToggleButtonWrapper'
import ToggleButtonItem from '@/src/components/ui/ToggleButton/ToggleButtonItem'
import Input from '@/src/components/ui/Input/Input'
// import {} from 'next/font/local'

// todo:

// button component done
// modal component done
// paper component done
// toggle button component done
// tabs component ??
// input component done
// title component
// checkbox component
// sidebar component
// select component
// list component
// tooltip component // всплывающая подсказка
// table component
// icon-button component
// alert component
// pagination component

export default function Home() {
  const { colorMode } = React.useContext(ThemeContext)

  const { ref, isShow, setIsShow } = handleClickOutside(false)

  const [activeButton, setActiveButton] = React.useState(0)

  const [inputValue, setInputValue] = React.useState('')

  return (
    <main
      className={cn(styles.main, {
        [styles.darkTheme]: colorMode === 'dark',
        [styles.lightTheme]: colorMode === 'light',
      })}>
      <Modal isShow={isShow} setIsShow={setIsShow} ref={ref} modalTitle="SDFDF SFSD F S">
        <p>
          Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem,
          ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum.
          Lorem, ipsum.
        </p>
        <p>
          Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem,
          ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum.
          Lorem, ipsum.
        </p>
      </Modal>

      <div className={styles.container}>
        <SwitchColorMode />

        <button onClick={() => setIsShow(true)}>open modal</button>

        <div style={{ margin: '30px' }}></div>
        <ToggleButtonWrapper>
          <ToggleButtonItem buttonIndex={0} activeButton={activeButton} setActiveButton={() => setActiveButton(0)}>
            Група
          </ToggleButtonItem>
          <ToggleButtonItem buttonIndex={1} activeButton={activeButton} setActiveButton={() => setActiveButton(1)}>
            Викладач
          </ToggleButtonItem>
          <ToggleButtonItem buttonIndex={2} activeButton={activeButton} setActiveButton={() => setActiveButton(2)}>
            Аудиторія
          </ToggleButtonItem>
        </ToggleButtonWrapper>

        <div
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
          }}>
          <Input value={inputValue} setValue={setInputValue} label="input label">
            11111
          </Input>

          <Input value={inputValue} setValue={setInputValue} label="input label" variant="standart">
            11111
          </Input>

          <Input
            value={inputValue}
            setValue={setInputValue}
            label="input label"
            isError={true}
            errorMessage="Мінімальна довжина паролю - 6 символів">
            11111
          </Input>

          <Input
            value={inputValue}
            setValue={setInputValue}
            label="input label"
            variant="standart"
            isError={true}
            errorMessage="Не вірний формат пошти">
            11111
          </Input>
        </div>

        <h1>Title Level 1</h1>
        <h2>Title Level 2</h2>
        <h3>Title Level 3</h3>
        <h4>Title Level 4</h4>
        <h5>Title Level 5</h5>
        <h6>Title Level 6</h6>

        <Paper width="800px">
          <h4>Paper title</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quae, quasi sed commodi sit est, sint ipsam
            nam illum pariatur nobis earum fuga voluptatibus eveniet! Velit consequatur nemo dolores dolorum. Architecto
            numquam, quae aut deserunt est ipsa soluta itaque veritatis! Sed quo officia, beatae a dolorum, amet culpa
            obcaecati exercitationem minima iusto, quam architecto dolor doloribus praesentium. Amet, laborum animi.
          </p>
        </Paper>

        <div>
          <Button color="red">Button</Button>
          <Button color="green">Button</Button>
          <Button color="blue">Button</Button>
          <Button color="pink">Button</Button>
          <Button color="gray">Button</Button>
          <Button color="black">Button</Button>
          <Button color="violet">Button</Button>
        </div>

        <div>
          <Button color="red" variant="outlined">
            Button
          </Button>
          <Button color="green" variant="outlined">
            Button
          </Button>
          <Button color="blue" variant="outlined">
            Button
          </Button>

          <Button color="pink" variant="outlined">
            Button
          </Button>
          <Button color="gray" variant="outlined">
            Button
          </Button>
          <Button color="black" variant="outlined">
            Button
          </Button>
          <Button color="violet" variant="outlined">
            Button
          </Button>
        </div>

        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    </main>
  )
}
