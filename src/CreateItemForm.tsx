import { Button, TextField } from "@mui/material"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import AddCircleOutLineIcon from '@mui/icons-material/AddCircleOutLine';

type Props = {
    createItem: (itemTitle: string) => void
}

export const CreateItemForm = ({ createItem }: Props) => {
    const [itemTitle, setItemTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const changeItemTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setItemTitle(event.currentTarget.value)
        setError(null)
    }

    const createItemHandler = () => {
        const trimmedTitle = itemTitle.trim()
        if (trimmedTitle !== '') {
            createItem(trimmedTitle)
            setItemTitle('')
        } else {
            setError('Title is required')
        }
    }
    const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            createItemHandler()
        }
    }

    return (
        <div>
            <TextField
                size="small"
                variant="outlined"
                
                value={itemTitle}
                onChange={changeItemTitleHandler}
                onKeyDown={createTaskOnEnterHandler}
                error={!!error}
                helperText={error}
            />
            <Button
                disableElevation
                variant="contained"
                onClick={createItemHandler}
                endIcon={<AddCircleOutLineIcon />}
            >
                add
            </Button>
            {/* {error && <div className={'error-message'}>{error}</div>} */}
        </div>
    )
}