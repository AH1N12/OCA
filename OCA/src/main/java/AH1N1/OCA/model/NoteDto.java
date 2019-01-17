package AH1N1.OCA.model;

import lombok.Builder;
import lombok.Data;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Builder
public class NoteDto {

    private Long id;
    @NotNull
    private Long parentFolderId;
    @NotNull
    private String tittle;
    @NotNull
    @Size(max = 1024)
    private String value;
}
