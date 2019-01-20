package AH1N1.OCA.model;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Size;

@Data
@NoArgsConstructor
public class NoteDto {

    private Long id;

    @Size(max = 1024)
    private String value;

    //    private Long parentFolderId;
}
