// This file was generated by RedwoodJS
import * as Cell from './ProjectDataCell'
import type { CellProps } from '@redwoodjs/web'
import type { FindProjectDataById, FindProjectDataByIdVariables } from 'types/graphql'

type SuccessType = typeof Cell.Success

export * from './ProjectDataCell'

type CellInputs = CellProps<SuccessType, FindProjectDataById, typeof Cell, FindProjectDataByIdVariables>

export default function (props: CellInputs): ReturnType<SuccessType>
