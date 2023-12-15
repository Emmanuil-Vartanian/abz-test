import { styled } from "@mui/system";

type InputFileType = {
  error: boolean
}

export const InputFile = styled('label')<InputFileType>(({ error }) => `
  cursor: pointer;
  display: flex;
  align-items: center;

  > div {
    padding: 14px 15px;

    :first-of-type {
      border-radius: 4px 0px 0px 4px;
      border: ${error ? '2px' : '1px'} solid ${error ? '#CB3D40' : 'rgba(0, 0, 0, 0.87)'};
    }

    :last-of-type {
      border-radius: 0px 4px 4px 0px;
      border: ${error ? '2px' : '1px'} solid ${error ? '#CB3D40' : '#D0CFCF'};
      color: #7E7E7E;
      width: ${error ? '294px' : '296px'};
      border-left: none;
    }
  }
`)
