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
import ListWrapper from '@/src/components/ui/List/ListWrapper'
import ListItem from '@/src/components/ui/List/ListItem'
import Select from '@/src/components/ui/Select/Select'
import SelectItem from '@/src/components/ui/Select/SelectItem'
import Title from '@/src/components/ui/Title/Title'
import Text from '@/src/components/ui/Text/Text'
import IconButton from '@/src/components/ui/IconButton/IconButton'
import { CiLight, CiDark } from 'react-icons/ci'
import Table from '@/src/components/ui/Table/Table'
import TableHead from '@/src/components/ui/Table/TableHead'
import TableRow from '@/src/components/ui/Table/TableRow'
import TableHeadCell from '@/src/components/ui/Table/TableHeadCell'
import TableBody from '@/src/components/ui/Table/TableBody'
import TableBodyCell from '@/src/components/ui/Table/TableBodyCell'
import Checkbox from '@/src/components/ui/Checkbox/Checkbox'
// import {} from 'next/font/local'

// todo:

// button component done
// modal component done
// paper component done
// toggle button component done
// input component done     !!!type number???????
// select component done
// list component done
// title component done
// text component done
// tabs component ??
// icon-button component done
// table component

// tooltip component // всплывающая подсказка
// checkbox component
// sidebar component
// header component
// alert component
// pagination component

export default function Home() {
  const { colorMode } = React.useContext(ThemeContext)

  const { ref, isShow, setIsShow } = handleClickOutside(false)

  const [activeButton, setActiveButton] = React.useState(0)

  const [inputValue, setInputValue] = React.useState('')

  const [selectItemValue, setSelectItemValue] = React.useState('')

  return (
    <main
      className={cn(styles.main, {
        [styles.darkTheme]: colorMode === 'dark',
        [styles.lightTheme]: colorMode === 'light',
      })}
    >
      <Modal isShow={isShow} setIsShow={setIsShow} ref={ref} modalTitle="SDFDF SFSD F S">
        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa quae, quasi sed commodi sit est, sint ipsam
          nam illum pariatur nobis earum fuga voluptatibus eveniet! Velit consequatur nemo dolores dolorum. Architecto
          numquam, quae aut deserunt est ipsa soluta itaque veritatis! Sed quo officia, beatae a dolorum, amet culpa
          obcaecati exercitationem minima iusto, quam architecto dolor doloribus praesentium. Amet, laborum animi.
        </Text>
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
          }}
        >
          <Input value={inputValue} setValue={setInputValue} label="input label" />

          <Input value={inputValue} setValue={setInputValue} label="input label" variant="standart" />

          <Input
            value={inputValue}
            setValue={setInputValue}
            label="input label"
            isError={true}
            errorMessage="Мінімальна довжина паролю - 6 символів"
          />

          <Input
            value={inputValue}
            setValue={setInputValue}
            label="input label"
            variant="standart"
            isError={true}
            errorMessage="Не вірний формат пошти"
          />
        </div>

        <Checkbox onClick={(checked) => console.log(checked)} color="black" />

        <Checkbox onClick={(checked) => console.log(checked)} />

        <div
          style={{
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
          }}
        >
          <Select value={selectItemValue} label="input label" variant="standart">
            <SelectItem value={'Item 1'} onChange={setSelectItemValue} />
            <SelectItem value={'Item 2'} onChange={setSelectItemValue} />
            <SelectItem value={'Item 3'} onChange={setSelectItemValue} />
            <SelectItem value={'Item 4'} onChange={setSelectItemValue} />
          </Select>
        </div>

        <Title align="left" Variant="h1">
          Custom title Level 1
        </Title>
        <Title align="left" Variant="h2" color="gray">
          Custom title Level 2
        </Title>
        <Title align="left" Variant="h3" color="green">
          Custom title Level 3
        </Title>
        <Title align="left" Variant="h4">
          Custom title Level 4
        </Title>
        <Title align="left" Variant="h5">
          Custom title Level 5
        </Title>
        <Title align="left" Variant="h6">
          Custom title Level 6
        </Title>

        <div style={{ padding: '30px' }}>
          <IconButton>
            <CiLight size={30} />
          </IconButton>

          <IconButton>
            <CiDark size={40} />
          </IconButton>
        </div>

        <div style={{ padding: '30px 0' }}>
          <Table>
            <TableHead>
              <TableRow variant="head">
                <TableHeadCell showControls>Company1</TableHeadCell>
                <TableHeadCell showControls>Company2</TableHeadCell>
                <TableHeadCell showControls>Company3</TableHeadCell>
                <TableHeadCell showControls>Company4</TableHeadCell>
                <TableHeadCell showControls>Company5</TableHeadCell>
                <TableHeadCell showControls>Company6</TableHeadCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <TableRow key={i}>
                    <TableBodyCell align="left">Ділова іноземна мова</TableBodyCell>
                    <TableBodyCell>Company2</TableBodyCell>
                    <TableBodyCell>Company3</TableBodyCell>
                    <TableBodyCell>Company4</TableBodyCell>
                    <TableBodyCell>Company5</TableBodyCell>
                    <TableBodyCell>Company6</TableBodyCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>

        <Paper width="800px">
          <h4>Paper title</h4>
          <Text additionalStyles={{ padding: '30px 0' }}>
            Примітка.: Функція TEXT перетворює числа на текст, що може ускладнити їх використання в подальших
            обчисленнях. Рекомендуємо зберігати вихідне значення в одній клітинці, а функцію TEXT використовувати в
            іншій. Потім, якщо знадобиться створити інші формули, завжди посилайтеся на вихідне значення, а не на
            результат функції TEXT.
          </Text>
          <Input value={inputValue} setValue={setInputValue} label="input label" />

          <Input value={inputValue} setValue={setInputValue} label="input label" variant="standart" />

          <Input
            value={inputValue}
            setValue={setInputValue}
            label="input label"
            isError={true}
            errorMessage="Мінімальна довжина паролю - 6 символів"
          />

          <Input
            value={inputValue}
            setValue={setInputValue}
            label="input label"
            variant="standart"
            isError={true}
            errorMessage="Не вірний формат пошти"
          />

          <p style={{ padding: '30px 0' }}>
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

        <div>
          <Button color="red" variant="text">
            Button
          </Button>
          <Button color="green" variant="text">
            Button
          </Button>
          <Button color="blue" variant="text">
            Button
          </Button>

          <Button color="pink" variant="text">
            Button
          </Button>
          <Button color="gray" variant="text">
            Button
          </Button>
          <Button color="black" variant="text">
            Button
          </Button>
          <Button color="violet" variant="text">
            Button
          </Button>
        </div>

        <ListWrapper>
          <ListItem>Item 1</ListItem>
          <ListItem>Item 2</ListItem>
          <ListItem>Item 3</ListItem>
        </ListWrapper>

        <div style={{ padding: '100px' }}></div>
      </div>
    </main>
  )
}
