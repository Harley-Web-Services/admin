import * as React from "react";
import { List, Datagrid, Edit, Create, SimpleForm,ImageField, DateField, TextField, EditButton, TextInput, DateInput } from 'react-admin';
import BookIcon from '@material-ui/icons/Book';
export const PostIcon = BookIcon;

export const TabsList = (props) => (
    <List {...props}>
        <Datagrid>
             <TextField source="tabData"/>
            <EditButton basePath="/tabData" />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};

export const TabsEdit = (props) => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
             <TextInput source="tabData" />
           
        </SimpleForm>
    </Edit>
);

export const TabsCreate = (props) => (
    <Create title="Design Types" {...props}>
        <SimpleForm>
            <TextInput source="tabData" />
            
        </SimpleForm>
    </Create>
)